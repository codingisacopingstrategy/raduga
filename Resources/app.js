var Raduga = {};

var Platform = require('platform');
Ti.API.info(["OS:       " + Platform.osname,
             "Language: " + Platform.currentLanguage,
             "Screen:   " + Platform.width + "*" + Platform.height].join("\n"));
var UI = require('ui');

var Cloud = require('ti.cloud');
// Persist the session from last time so we don’t have to login again,
// Normally, this would use the setSessionId function but that didn’t
// seem to be working.
Cloud.sessionId = Ti.App.Properties.getString('sessionID');

//. Set up push notifications: use the right module for each platform
var pushlib = require(Platform.osname === 'android' ? 'push_android' : 'push_ios');
// Succesfully initialising push notifications will produce a device token.
// How to initialise is different for both platforms.
// the object Push allows us to initialise push notifications, and to pass
// as a callback a function to run when everything has been set up, using
// the newly acquired device token.
var push = new pushlib.Push(function(deviceToken) {
    Cloud.PushNotifications.subscribe({
        channel: 'raduga_predictions',
        type: Platform.osname === 'android' ? 'android' : 'ios',
        device_token: deviceToken
    }, function (e) {
        if (e.success) {
            Ti.API.info('Successfully subscribed to the Raduga push messages channel with device token ' + deviceToken);
        } else {
            UI.alertError('Failed Push Notification subscription: ' + (e.error && e.message) || JSON.stringify(e));
        }
    });
});

var cities = require('cities').cities;   // the coordinates of 1100 Russian towns and cities
var gradients = require('gradients');
var utils = require('utils');

var users = require('users');

/* Set up UI */
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#ffffff');
// launch in portrait mode
Ti.UI.orientation = Ti.UI.PORTRAIT;
//
// Create the Windows
//

var globelib = require('globe');
var globe = new globelib.Globe();

var photoslib = require('photos');
var photos = new photoslib.Photos();

var maplib = require('map');
var map = new maplib.Map();

var cameralib = require('camera');
var camera = new cameralib.Camera();

var settingslib = require('settings');
var settings = new settingslib.Settings();

if (Platform.ios) {
    photos.window.setStatusBarStyle(Ti.UI.iPhone.StatusBar.DARK_CONTENT);
    photos.window.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
    globe.window.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
    globe.window.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
    map.window.setStatusBarStyle(Ti.UI.iPhone.StatusBar.DARK_CONTENT);
    map.window.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
    camera.window.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
    camera.window.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
    settings.window.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
    settings.window.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
}

//
// Create tabs that will house the windows, and associated events
//

var tabGroup = Ti.UI.createTabGroup({
    tabsBackgroundImage: 'ui/backgrounds/semi-transparant-pixel-60.png',
    // I want to not have the default tab icons be coloured grey. Both of these have no effect:
    // cf http://developer.appcelerator.com/question/163061/tab-group-grey-icons-in-io7
    tabsBackgroundColor: 'transparent',
    // tabsBackgroundDisabledColor: 'white',
    tintColor: '#929292',
    navBarHidden: true,

});

var photosTab = Ti.UI.createTab({
    id: 'photosTab',
    icon: 'ui/icons/wall.png',
    activeIcon: 'ui/icons/wall_hi.png',
    window: photos.window,
    width: '20%',
    height: '50dp'
});

photosTab.addEventListener("focus", function(e) {
    Ti.API.info("focus on the photosTab");
    if (e.source.id === 'photosTab') {
        Ti.API.info("focus on the photosTab tab, updating photos");
        photos.update();
    } else {
        Ti.API.info("Not actually update phototab");
    }
});

var globeTab = Ti.UI.createTab({
    icon: 'ui/icons/earth.png',
    activeIcon: 'ui/icons/earth_hi.png',
    window: globe.window,
    width: '20%',
    height: '50dp'
});

var mapTab = Ti.UI.createTab({
    icon: 'ui/icons/map.png',
    activeIcon: 'ui/icons/map_hi.png',
    window: map.window,
    width: '20%',
    height: '50dp'
});

// for now we add it as a tab, but it will probably be a seperate button on the top of the screen
var cameraTab = Ti.UI.createTab({
    id: 'cameraTab',
    icon: 'ui/icons/camera.png',
    activeIcon: 'ui/icons/camera_hi.png',
    window: camera.window,
    width: '20%',
    height: '50dp'
});

// Get the camera
cameraTab.addEventListener("focus", function(e){
    Ti.API.info("focus on the cameraTab");
    if (e.source.id === 'cameraTab') {
        Ti.API.info("focus on the cameraTab tab");
        camera.showCam();
    }
});

var settingsTab = Ti.UI.createTab({
    icon: 'ui/icons/settings.png',
    activeIcon: 'ui/icons/settings_hi.png',
    window: settings.window,
    width: '20%',
    height: '50dp'
});

tabGroup.addTab(globeTab);
tabGroup.addTab(mapTab);
tabGroup.addTab(cameraTab);
tabGroup.addTab(photosTab);
tabGroup.addTab(settingsTab);

Ti.App.addEventListener('switchTab', function(e) {
    if (e.tab === "photos") {
        tabGroup.setActiveTab(photosTab);
    } else if (e.tab === "settings") {
        tabGroup.setActiveTab(settingsTab);
    }
});
Ti.App.addEventListener('photosUpdate', photos.update);

Ti.App.addEventListener('startedLoading', function() {
    settings.startLoading();
});
Ti.App.addEventListener('stoppedLoading', function() {
    settings.stopLoading();
});
Ti.App.addEventListener('user_status_change', function() {
    settings.refreshUI();
});
Ti.App.addEventListener('loggedIn', push.init);
Ti.App.addEventListener('loggedIn', function() {
    Ti.API.info('User logged in, re-request photos so globe spotted message can be reloaded & trash cans can appear in photo scroll');
    photos.update();
    Ti.API.info('User logged in, set globeTab as active');
    tabGroup.setActiveTab(globeTab);
});
Ti.App.addEventListener('loggedOut', function() {
    Ti.API.info('User logged out, set settingsTab as active');
    tabGroup.setActiveTab(settingsTab);
});
Ti.App.addEventListener('launched', function(){
    Ti.API.info('App ready to launch');
    settings.refreshUI();
    tabGroup.open();
});
Ti.App.addEventListener('spottedRainbows', function(e) {
    Ti.API.info('Spotted rainbows sent to map');
    map.updateRainbows(e.rainbows);
    Ti.API.info('Latest spotted rainbow shown above the globe');
    globe.updateRainbows(e.rainbows);
});

Ti.App.addEventListener('rainbowClicked', function(e) {
    // The underlying idea is that the index set in map.js > photos2Features
    // equates to the rowIndex set in photos.js > createTableData
    // and that that thus the photoscroll can scroll to the position of
    // the corresponding photo, when a city is clicked on the map
    // however, FIXME ’cause this doesn’t seem to work
    // the photoscroll does scroll, simply not to the right place
    tabGroup.setActiveTab(photosTab);
    Ti.API.info('click on index ' + e.index );
    Ti.API.info('scrolling to image, I hope');
    var animationOptions = Ti.Platform.ios ? { animated: true, position: Ti.UI.iPhone.TableViewScrollPosition.TOP} : null;
    photos.tableView.scrollToIndex(parseInt(e.index, 10) * 2 + 1, animationOptions);
});


/*
 * ATTENTION: extremely inelegant way of making sure the mapTab background
 * is more opaque
 *
 */
var standardOp = function() {
    tabGroup.setTabsBackgroundImage('ui/backgrounds/semi-transparant-pixel-60.png');
};
var highOp = function() {
    tabGroup.setTabsBackgroundImage('ui/backgrounds/semi-transparant-pixel-80.png');
};

cameraTab.addEventListener("focus", standardOp);
globeTab.addEventListener("focus", standardOp);
mapTab.addEventListener("focus", highOp);
cameraTab.addEventListener("focus", standardOp);
settingsTab.addEventListener("focus", standardOp);

//
// Initialise app
//

var initWithNetwork = function() {
    Ti.API.info("initialising app, presuming network connectivity");
    users.updateUser();
    globe.update();
    photos.update();
};

var initSansNetwork = function() {
    Ti.API.info("initialising app, presuming no network connectivity");
    globe.error();
    tabGroup.setActiveTab(globeTab);
    Ti.App.fireEvent('launched');
};

if (Ti.Network.getNetworkTypeName() === "NONE") {
    initSansNetwork();
} else {
    initWithNetwork();
}

// If connection drops or becomes available
Ti.Network.addEventListener('change', function(e) {
    Ti.API.info("detected change in network connectivity");
    if (Ti.Network.getNetworkTypeName() === "NONE") {
        initSansNetwork();
    } else {
        initWithNetwork();
    }
});

var updateColours = function() {
    if (Ti.Network.getNetworkTypeName() === "NONE") {
        // no internet access, no updates
        return;
    }
    Ti.API.info("Checking if colours need to be updated");
    if (Raduga.currentGradientslug === gradients.gradientSlug()) {
        return null;
    }
    Ti.API.info("colours need to be updated");

    globe.update();
    globe.updateColours();
    settings.updateColours();

    Raduga.currentGradientslug = gradients.gradientSlug();
};

var colourTimer = setInterval(updateColours, 300000);
