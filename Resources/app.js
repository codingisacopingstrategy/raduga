var Raduga = {
    photos: [],
    user: null
};

var deviceToken = null;

var Cloud = require('ti.cloud');
// Persist the session from last time so we don’t have to login again,
// Normally, this would use the setSessionId function but that didn’t
// seem to be working.
Cloud.sessionId = Ti.App.Properties.getString('sessionID');

//. Set up push notifications

if (Titanium.Platform.osname === 'android') {
    Ti.include('push_android.js');
} else {
    Ti.include('push_ios.js');
}

setupPush(function() {
    Cloud.PushNotifications.subscribe({
        channel: 'raduga_predictions',
        type: 'gcm',
        device_token: deviceToken
    }, function (e) {
        if (e.success) {
            Ti.API.info('Successfully subscribed to the Raduga push messages channel');
        } else {
            alertError((e.error && e.message) || JSON.stringify(e));
        }
    });
});

Ti.include('cities.js');   // the coordinates of 1100 Russian towns and cities
Ti.include('utils.js');    // utility functions
Ti.include('users.js');    // functions for logging in, logging out, and creating new users

/* Set up UI */

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#ffffff');

//
// Create the Windows
//
var photosWindow = Titanium.UI.createWindow({
    backgroundColor: '#000',
    navBarHidden: true,
});

var globeWindow = Titanium.UI.createWindow({
    backgroundColor: '#000',
    layout: 'vertical',
    navBarHidden: true,
});

var cameraWindow = Titanium.UI.createWindow({
    backgroundColor: '#000',
    layout: 'vertical',
    navBarHidden: true,
});

var settingsWindow = Titanium.UI.createWindow({
    left: 0,
    right: 0,
    height: 'auto',
    top: 0,
    backgroundColor: '#000',
    layout: 'vertical',
    navBarHidden: true,
});

if (Titanium.Platform.osname === 'iphone') {
    photosWindow.setStatusBarStyle(Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT);
    globeWindow.setStatusBarStyle(Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT);
    cameraWindow.setStatusBarStyle(Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT);
    settingsWindow.setStatusBarStyle(Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT);
}

//
// Add functionality to the windows
//


Ti.include('globe.js');
Ti.include('photos.js');
Ti.include('camera.js');
Ti.include('settings.js');

//
// Create tabs that will house the windows
//

var tabGroup = Titanium.UI.createTabGroup({
    backgroundColor: 'transparent',
    tabsBackgroundColor: 'transparent',
});

var photosTab = Titanium.UI.createTab({
    icon: 'ui/icons/wall.png',
    titleid: 'photos_tab_title',
    window: photosWindow,
});

photosTab.addEventListener("focus", updatePhotos);

var globeTab = Titanium.UI.createTab({
    icon: 'ui/icons/earth.png',
    titleid: 'globe_tab_title',
    window: globeWindow,
});

// for now we add it as a tab, but it will probably be a seperate button on the top of the screen
var cameraTab = Titanium.UI.createTab({
    icon: 'ui/icons/camera.png',
    titleid: 'camera_tab_title',
    window: cameraWindow,
});

// it works now on ios, but if it happens to not work on Android, see:
// https://developer.appcelerator.com/question/21191/android-window-events-not-working-with-tabgroup-titanium-12
cameraTab.addEventListener("focus", showCam);

var settingsTab = Titanium.UI.createTab({
    icon: 'ui/icons/settings.png',
    titleid: 'settings_tab_title',
    window: settingsWindow
});

tabGroup.addTab(globeTab);
tabGroup.addTab(photosTab);
tabGroup.addTab(cameraTab);
tabGroup.addTab(settingsTab);

//
// Initialise app
//

tabGroup.open();
if (!Ti.App.Properties.getString('sessionID')) {
    tabGroup.setActiveTab(settingsTab);
}

Cloud.Users.showMe(function (e) {
    if (e.success) {
        Raduga.user = e.users[0];
        var user = Raduga.user;
        Ti.API.info("User " +  user.username + " logged in");
        Ti.App.Properties.setString('sessionID', Cloud.sessionId);
        Ti.App.Properties.setString('username', user.username);

    } else {
        // this way the will know we need to log in.
        Ti.API.info("No user logged in");
        Ti.App.Properties.setString('sessionID', '');
        settingsWindow.fireEvent('user_status_change');
        tabGroup.setActiveTab(settingsTab);
    }
});

/* This I was using to quickly show some of the Pony’s png mockup directly on the device

var win = Ti.UI.createWindow();
var image = Ti.UI.createImageView({
  image:'/ui/mock_04.png'
});
win.add(image);
win.open();

*/
