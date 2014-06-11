var Raduga = {
    photos: [],
    user: null,
    Platform: {},
};

// From the docs: Set local variables to avoid calling native methods
// http://docs.appcelerator.com/titanium/3.0/#!/guide/Coding_Best_Practices-section-30082362_CodingBestPractices-Setlocalvariablestoavoidcallingnativemethods
Raduga.Platform.osname = Ti.Platform.osname;
Raduga.Platform.ios = Titanium.Platform.name == 'iPhone OS';

Raduga.Platform.currentLanguage = Ti.Locale.currentLanguage;

Raduga.Platform.width = Ti.Platform.displayCaps.platformWidth;
Raduga.Platform.height = Ti.Platform.displayCaps.platformHeight;

var deviceToken = null;

var Cloud = require('ti.cloud');
// Persist the session from last time so we don’t have to login again,
// Normally, this would use the setSessionId function but that didn’t
// seem to be working.
Cloud.sessionId = Ti.App.Properties.getString('sessionID');

if (Raduga.Platform.ios) {
    var Social = require('dk.napp.social');

    Ti.API.info("Facebook available: " + Social.isFacebookSupported());
    Ti.API.info("Twitter available: " + Social.isTwitterSupported());
    Ti.API.info("SinaWeibo available: " + Social.isSinaWeiboSupported());
}

//. Set up push notifications

// this exports the function `setupPush(callback)`

if (Raduga.Platform.osname === 'android') {
    Ti.include('push_android.js');
} else {
    Ti.include('push_ios.js');
}
var initPush = function() {
    setupPush(function() {
        Cloud.PushNotifications.subscribe({
            channel: 'raduga_predictions',
            type: Raduga.Platform.osname === 'android' ? 'android' : 'ios',
            device_token: deviceToken
        }, function (e) {
            if (e.success) {
                Ti.API.info('Successfully subscribed to the Raduga push messages channel with device token ' + deviceToken);
            } else {
                alertError('Failed Push Notification subscription: ' + (e.error && e.message) || JSON.stringify(e));
            }
        });
    });
};

Ti.include('cities.js');   // the coordinates of 1100 Russian towns and cities
Ti.include('utils.js');    // utility functions
Ti.include('users.js');    // functions for logging in, logging out, and creating new users
Ti.include('gradients.js');    // `exposes gradient_stops`

/* Set up UI */

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#ffffff');
// launch in portrait mode
Ti.UI.orientation = Ti.UI.PORTRAIT;
//
// Create the Windows
//
var photosWindow = Ti.UI.createWindow({
    orientationModes: [Ti.UI.PORTRAIT],
    backgroundColor: 'white',
    navBarHidden: true,
});

var globeWindow = Ti.UI.createWindow({
    orientationModes: [Ti.UI.PORTRAIT],
    backgroundColor: 'transparent',
    backgroundGradient: currentGradient(),
    navBarHidden: true,
});

var mapWindow = Ti.UI.createWindow({
    orientationModes: [Ti.UI.PORTRAIT],
    backgroundColor: 'white',
    layout: 'vertical',
    navBarHidden: true,
});

var cameraWindow = Ti.UI.createWindow({
    orientationModes: [Ti.UI.PORTRAIT],
    backgroundColor: 'white',
    layout: 'vertical',
    navBarHidden: true,
});

var settingsWindow = Ti.UI.createWindow({
    orientationModes: [Ti.UI.PORTRAIT],
    left: 0,
    right: 0,
    height: 'auto',
    top: 0,
    backgroundGradient: currentSettingsGradient(),
    navBarHidden: true,
});

if (Raduga.Platform.ios) {
    photosWindow.setStatusBarStyle(Ti.UI.iPhone.StatusBar.DARK_CONTENT);
    photosWindow.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
    globeWindow.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
    globeWindow.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
    mapWindow.setStatusBarStyle(Ti.UI.iPhone.StatusBar.DARK_CONTENT);
    mapWindow.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
    cameraWindow.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
    cameraWindow.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
    settingsWindow.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
    settingsWindow.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
}

//
// Add functionality to the windows
//


Ti.include('globe.js');
Ti.include('photos.js');
Ti.include('map.js');
Ti.include('camera.js');
Ti.include('settings.js');

//
// Create tabs that will house the windows
//

var tabGroup = Ti.UI.createTabGroup({
    tabsBackgroundImage: 'ui/backgrounds/semi-transparant-pixel-40.png',
    // I want to not have the default tab icons be coloured grey. Both of these have no effect:
    // cf http://developer.appcelerator.com/question/163061/tab-group-grey-icons-in-io7
    // tabsBackgroundColor: 'white',
    // tabsBackgroundDisabledColor: 'white',
    tintColor: '#929292'
});

var photosTab = Ti.UI.createTab({
    icon: 'ui/icons/wall.png',
    activeIcon: 'ui/icons/wall_hi.png',
    window: photosWindow,
});

photosTab.addEventListener("focus", updatePhotos);

var globeTab = Ti.UI.createTab({
    icon: 'ui/icons/earth.png',
    activeIcon: 'ui/icons/earth_hi.png',
    window: globeWindow,
});

var mapTab = Ti.UI.createTab({
    icon: 'ui/icons/map.png',
    activeIcon: 'ui/icons/map_hi.png',
    window: mapWindow,
});

// for now we add it as a tab, but it will probably be a seperate button on the top of the screen
var cameraTab = Ti.UI.createTab({
    icon: 'ui/icons/camera.png',
    activeIcon: 'ui/icons/camera_hi.png',
    window: cameraWindow,
});

// Get the camera
cameraTab.addEventListener("focus", showCam);

var settingsTab = Ti.UI.createTab({
    icon: 'ui/icons/settings.png',
    activeIcon: 'ui/icons/settings_hi.png',
    window: settingsWindow
});

tabGroup.addTab(globeTab);
tabGroup.addTab(photosTab);
tabGroup.addTab(mapTab);
tabGroup.addTab(cameraTab);
tabGroup.addTab(settingsTab);

//
// Initialise app
//

var updateUser = function() {
    Cloud.Users.showMe(function (e) {
        if (e.success) {
            Raduga.user = e.users[0];
            var user = Raduga.user;

            Ti.API.info("User " +  user.username + " " + user.id + " logged in at " +
            Ti.App.Properties.getString('city_name_en') + '/' + Ti.App.Properties.getString('city_name_ru') +
            ' (' + parseFloat(Ti.App.Properties.getString('city_lon')) + ', ' +
            parseFloat(Ti.App.Properties.getString('city_lat')) + ')' );

            Ti.App.Properties.setString('sessionID', Cloud.sessionId);
            Ti.App.Properties.setString('username', user.username);
            Ti.App.Properties.setString('userid', user.id);
            initPush();
        } else {
            // this way the will know we need to log in.
            Ti.API.info("No user logged in");
            Ti.App.Properties.setString('sessionID', '');
            settingsWindow.fireEvent('user_status_change');
            tabGroup.setActiveTab(settingsTab);
        }
    });
};

var initWithNetwork = function() {
    updateUser();
    updateElektroL();
    updatePhotos();
    updateRainbowCities();
    if (!Ti.App.Properties.getString('sessionID')) {
        tabGroup.setActiveTab(settingsTab);
    }
    tabGroup.open();
};

var initSansNetwork = function() {
    predictionLabel.setText(L('no_internet'));
    globeWindow.open();
};

if (Titanium.Network.networkType === Titanium.Network.NETWORK_NONE) {
    initSansNetwork();
} else {
    initWithNetwork();
}

// If connection drops or becomes available FIXME doesn’t seem to work yet
Ti.Network.addEventListener('change', function(e) {
    Ti.API.info("detected change in network connectivity");
    if (e.online) {
        initWithNetwork();
    } else {
        initSansNetwork();
    }
});

var updateColours = function() {
    Ti.API.info("Checking if colours need to be updated");
    if (Raduga.currentGradientSlug === gradientSlug()) {
        return null;
    }
    Ti.API.info("colours need to be updated");

    var slug; //= '16:00'; set a slug by hand for debugging purposes

    globeWindow        .setBackgroundGradient(currentGradient(slug));
    settingsWindow     .setBackgroundGradient(currentSettingsGradient(slug));
    cameraWindow       .setBackgroundGradient(currentGradient(slug));
    predictionLabel    .setColor(currentColour(slug));
    recentRainbowLabel .setColor(currentColour(slug));
    usernameLabel      .setColor(currentColour(slug));
    passwordLabel      .setColor(currentColour(slug));
    passwordCheckLabel .setColor(currentColour(slug));
    notificationsLabel .setColor(currentColour(slug));
    cityLabel          .setColor(currentColour(slug));

    Raduga.currentGradientslug = gradientSlug();
};

var colourTimer = setInterval(updateColours, 300000);
updateColours();

