var Raduga = {
    photos: [],
    user: null
};

var Cloud = require('ti.cloud');
Ti.include('cities.js');
Ti.include('utils.js');
Ti.include('users.js');

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
    navBarHidden: true,
});

var cameraWindow = Titanium.UI.createWindow({
    backgroundColor: '#000',
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
    icon: 'KS_nav_views.png',
    title: 'Photos',
    window: photosWindow,
});

var globeTab = Titanium.UI.createTab({
    icon: 'KS_nav_ui.png',
    title: 'Rainbows',
    window: globeWindow,
});

// for now we add it as a tab, but it will probably be a seperate button on the top of the screen
var cameraTab = Titanium.UI.createTab({
    icon: 'KS_nav_ui.png',
    title: 'Camera',
    window: cameraWindow,
});

// it works now on ios, but if it happens to not work on Android, see:
// https://developer.appcelerator.com/question/21191/android-window-events-not-working-with-tabgroup-titanium-12
cameraTab.addEventListener("focus", showCam);

var settingsTab = Titanium.UI.createTab({
    icon: 'KS_nav_ui.png',
    title: 'Settings',
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

/* This I was using to quickly show some of the Pony’s png mockup directly on the device

var win = Ti.UI.createWindow();
var image = Ti.UI.createImageView({
  image:'/ui/mock_04.png'
});
win.add(image);
win.open();

*/
