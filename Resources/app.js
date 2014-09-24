var Raduga = {
    photos: [],
    user: null,
    Platform: {},
    cameraAvailable: true,
};

// From the docs: Set local variables to avoid calling native methods
// http://docs.appcelerator.com/titanium/3.0/#!/guide/Coding_Best_Practices-section-30082362_CodingBestPractices-Setlocalvariablestoavoidcallingnativemethods
Raduga.Platform.osname = Ti.Platform.osname;
Raduga.Platform.ios = Titanium.Platform.name == 'iPhone OS';
Raduga.Platform.android = Raduga.Platform.osname === 'android';

Raduga.Platform.currentLanguage = Ti.Locale.currentLanguage;

Raduga.Platform.width = Ti.Platform.displayCaps.platformWidth;
Raduga.Platform.height = Ti.Platform.displayCaps.platformHeight;

Ti.API.info(["OS:       " + Raduga.Platform.osname,
             "Language: " + Raduga.Platform.currentLanguage,
             "Screen:   " + Raduga.Platform.width + "*" + Raduga.Platform.height].join("\n"));

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
    backgroundColor: 'black',
    navBarHidden: true,
});

var settingsWindow = Ti.UI.createWindow({
    orientationModes: [Ti.UI.PORTRAIT],
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
    tabsBackgroundImage: 'ui/backgrounds/semi-transparant-pixel-60.png',
    // I want to not have the default tab icons be coloured grey. Both of these have no effect:
    // cf http://developer.appcelerator.com/question/163061/tab-group-grey-icons-in-io7
    tabsBackgroundColor: 'transparent',
    // tabsBackgroundDisabledColor: 'white',
    tintColor: '#929292',
    navBarHidden: true,

});

var photosTab = Ti.UI.createTab({
    icon: 'ui/icons/wall.png',
    activeIcon: 'ui/icons/wall_hi.png',
    window: photosWindow,
    width: '20%',
    height: '50dp'
});

photosTab.addEventListener("focus", updatePhotos);

var globeTab = Ti.UI.createTab({
    icon: 'ui/icons/earth.png',
    activeIcon: 'ui/icons/earth_hi.png',
    window: globeWindow,
    width: '20%',
    height: '50dp'
});

var mapTab = Ti.UI.createTab({
    icon: 'ui/icons/map.png',
    activeIcon: 'ui/icons/map_hi.png',
    window: mapWindow,
    width: '20%',
    height: '50dp'
});

// for now we add it as a tab, but it will probably be a seperate button on the top of the screen
var cameraTab = Ti.UI.createTab({
    id: 'cameraTab',
    icon: 'ui/icons/camera.png',
    activeIcon: 'ui/icons/camera_hi.png',
    window: cameraWindow,
    width: '20%',
    height: '50dp'
});

// Get the camera
cameraTab.addEventListener("focus", function(e){
    Ti.API.info("focus on the cameraTab");
    if (e.source.id === 'cameraTab') {
        Ti.API.info("focus on the cameraTab tab");
        showCam();
    }
});

var settingsTab = Ti.UI.createTab({
    icon: 'ui/icons/settings.png',
    activeIcon: 'ui/icons/settings_hi.png',
    window: settingsWindow,
    width: '20%',
    height: '50dp'
});

tabGroup.addTab(globeTab);
tabGroup.addTab(mapTab);
tabGroup.addTab(cameraTab);
tabGroup.addTab(photosTab);
tabGroup.addTab(settingsTab);


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
photosTab.addEventListener("focus", updatePhotos);
globeTab.addEventListener("focus", standardOp);
mapTab.addEventListener("focus", highOp);
cameraTab.addEventListener("focus", standardOp);
settingsTab.addEventListener("focus", standardOp);


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
            tabGroup.open();
        } else {
            // this way the will know we need to log in.
            Ti.API.info("No user logged in");
            Ti.App.Properties.setString('sessionID', '');
            settingsWindow.fireEvent('user_status_change');
            tabGroup.setActiveTab(settingsTab);
            tabGroup.open();
        }
    });
};


var initWithNetwork = function() {
    Ti.API.info("initialising app, presuming network connectivity");
    updateUser();
    updateElektroL();
    updatePhotos();
    updateRainbowCities();
    updateMap();
    if (!Ti.App.Properties.getString('sessionID')) {
        tabGroup.setActiveTab(settingsTab);
    }
};

var initSansNetwork = function() {
    Ti.API.info("initialising app, presuming no network connectivity");
    globe.setImage('html/elektro_l_130502_0030_10.png'); // globe error image
    tabGroup.setActiveTab(globeTab);
    tabGroup.open();
    predictionLabel.setText(L('no_internet'));
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
    if (Raduga.currentGradientSlug === gradientSlug()) {
        return null;
    }
    Ti.API.info("colours need to be updated");

    var slug; //= '16:00'; set a slug by hand for debugging purposes

    globeWindow                     .setBackgroundGradient(currentGradient(slug));
    settingsWindow                  .setBackgroundGradient(currentSettingsGradient(slug));
    predictionLabel                 .setColor(currentColour(slug));
    recentRainbowLabel              .setColor(currentColour(slug));
    usernameLoggedInLabel           .setColor(currentColour(slug));
    usernameLoggedInLabel           .setColor(currentColour(slug));
    rainbowExplanationHeadingLabel  .setColor(currentColour(slug));
    rainbowExplanationLabel         .setColor(currentColour(slug));
    usernameNewUserLabel            .setColor(currentColour(slug));
    usernameNewUserLabelUnderLine   .setBackgroundColor(currentColour(slug));
    notificationsLabel              .setColor(currentColour(slug));

    updateElektroL();
    updateSunLine();

    Raduga.currentGradientslug = gradientSlug();
};

var colourTimer = setInterval(updateColours, 300000);
updateColours();

