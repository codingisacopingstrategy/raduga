var Raduga = {
    photos: [],
    user: null,
    Platform: {},
    cameraAvailable: true,
};

Platform = require('platform');
Ti.API.info(["OS:       " + Platform.osname,
             "Language: " + Platform.currentLanguage,
             "Screen:   " + Platform.width + "*" + Platform.height].join("\n"));
UI = require('ui');

var deviceToken = null;

var Cloud = require('ti.cloud');
// Persist the session from last time so we don’t have to login again,
// Normally, this would use the setSessionId function but that didn’t
// seem to be working.
Cloud.sessionId = Ti.App.Properties.getString('sessionID');

if (Platform.ios) {
    var Social = require('dk.napp.social');
    Ti.API.info(["Facebook available: " + Social.isFacebookSupported(),
                 "Twitter available: " + Social.isTwitterSupported(),
                 "SinaWeibo available: " + Social.isSinaWeiboSupported()].join(" "));
}

//. Set up push notifications
var push = require(Platform.osname === 'android' ? 'push_android' : 'push_ios');
var setupPush = push.setupPush;

var initPush = function() {
    setupPush(function() {
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
};

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
var photosWindow = Ti.UI.createWindow({
    orientationModes: [Ti.UI.PORTRAIT],
    backgroundColor: 'white',
    navBarHidden: true,
});

var globelib = require('globe');
var globe = new globelib.Globe();

var mapWindow = Ti.UI.createWindow({
    orientationModes: [Ti.UI.PORTRAIT],
    backgroundColor: 'white',
    layout: 'vertical',
    navBarHidden: true,
});

var cameralib = require('camera');
var camera = new cameralib.Camera();

var settingslib = require('settings');
var settings = new settingslib.Settings();

if (Platform.ios) {
    photosWindow.setStatusBarStyle(Ti.UI.iPhone.StatusBar.DARK_CONTENT);
    photosWindow.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
    globe.window.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
    globe.window.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
    mapWindow.setStatusBarStyle(Ti.UI.iPhone.StatusBar.DARK_CONTENT);
    mapWindow.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
    camera.window.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
    camera.window.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
    settings.window.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
    settings.window.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
}

//
// Add functionality to the windows
//


// photosWindow behaviour

var updateSpottedMessage = function() {
     // display most recent rainbow in globe tab
    if (Raduga.photos.length === 0) {
        globe.setRecentRainbowText('');
        return null;
    }
    var photo = Raduga.photos[0];
    var latestRainbowDate = new Date(photo.created_at);
    if (users.loggedIn()) {
        var spottedMessage = String.format(L('rainbow_spotted_alt'),
            photo.custom_fields[Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en'],
            utils.distanceToHome(photo.custom_fields.coordinates[0][1], photo.custom_fields.coordinates[0][0]));
    } else {
        var spottedMessage = String.format(L('rainbow_spotted_no_from_you'),
        photo.custom_fields[Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en']);
    }
    var dateMessage = latestRainbowDate.getDate() + ' ' + utils.getMonth(latestRainbowDate) + ' ' + utils.Date2PonyHour(latestRainbowDate);
    globe.setRecentRainbowText(spottedMessage + '\n' + dateMessage);
};

var updatePhotos = function() {
    Ti.API.info('updating photos');
    var url = 'http://vps40616.public.cloudvps.com/photos/?where={"processed":true}&projection={"image":0}';
    // var url = 'http://127.0.0.1:5000/photos/?where={"processed":true}&projection={"image":0}';
    var json;

    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            // parse the retrieved data, turning it into a JavaScript object
            json = JSON.parse(this.responseText);
            var photos = json._items;
            Ti.API.info('found on the internet ' + photos.length + ' photos');
            Raduga.photos = photos;
            // fill the photo-tab
            tableView.setData(createTableData());
            // plot the photos in the webview
            // globe.evalJS('svg.append("path").datum(' + JSON.stringify(photos2Features())  + ').attr("d", path.pointRadius(14)).attr("class", "place");');

            updateSpottedMessage();
        },
        onerror: function(error) {
            if (Ti.Network.getNetworkTypeName() === "NONE" || error.code === -1004 || error.code === -1001) {
                /** If the telephone is not connected to the internet, this is not actually an error */
               /** btw, error -1004 is when there is network but it can’t find the internet
                * -1001 is when the server times out (probably a connection problem as well) */
                Ti.API.info("tried to request photos while not connected to the internet");
                return;
            }
            UI.alertError('Failed loading photos through network: ' + JSON.stringify(error));
        }
    });

    xhr.open("GET", url);
    xhr.send();
};

var deletePhoto = function(photo) {
    var url = 'http://vps40616.public.cloudvps.com/photos/' + photo.id;
//    var url = 'http://127.0.0.1:5000/photos/' + photo.id;
    var authstr = 'Basic ' + Ti.Utils.base64encode(Ti.App.Properties.getString('userid') + ':');

    var delXhr = Ti.Network.createHTTPClient({
        onload: function() {
            updatePhotos();
        },
        onerror: function(error) {
            if (Ti.Network.getNetworkTypeName() === "NONE" || error.code === -1004 || error.code === -1001) {
                /** If the telephone is not connected to the internet, this is not actually an error */
               /** btw, error -1004 is when there is network but it can’t find the internet
                * -1001 is when the server times out (probably a connection problem as well) */
                Ti.API.info("tried to delete photos while not connected to the internet");
                return;
            }
            UI.alertError('Failed deleting photo: ' + JSON.stringify(error));
        }
    });

    delXhr.open("DELETE", url);
    //delXhr.setRequestHeader('X-HTTP-Method-Override', 'DELETE');  // in iOS we can send a DELETE request directly,
                                                                // but in (Titanium’s implementation of) Android we can’t
//    Concurrency checking disabled for now, because of https://github.com/nicolaiarocci/eve/issues/369 (is going to be available in 0.5)
//    delXhr.setRequestHeader('If-Match', photo._etag);
    console.log(photo._etag);
    delXhr.setRequestHeader('Authorization', authstr);
    delXhr.send();
};

var insufficientMetadata = function(photo) {
    return typeof photo.created_at === 'undefined' ||
           typeof photo.user === 'undefined' ||
           typeof photo.urls === 'undefined' ||
           typeof photo.custom_fields === 'undefined' ||
           typeof photo.custom_fields.name_en === 'undefined' ||
           typeof photo.custom_fields.name_ru === "undefined" ||
           typeof photo.custom_fields.coordinates === 'undefined';
};

var photos2Features = function() {
    var geoJSON = {};
    geoJSON.type = "FeatureCollection";
    geoJSON.features = [];

    console.log("trying to add " + Raduga.photos.length + " photos as features");
    for (var i = 0; i < Raduga.photos.length; i++) {
        var photo = Raduga.photos[i];

        // Skip photo’s without sufficient metadata
        if (insufficientMetadata(photo)) {
            Ti.API.info('Photo ' + photo._id + ' does not have sufficient metadata to locate on map');
            continue;
        }

        /* This code will only plot rainbows of today:
        if (new Date(photo.created_at).toDateString() !== new Date().toDateString()) {
            Ti.API.info('Photo ' + photo._id + ' is not of today, and does not warrant a marker on the map');
            continue;
        } */

        Ti.API.info('Photo ' + photo._id + ' will be plotted on the map');

        var name = photo.custom_fields[Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en'];
        var lon  = photo.custom_fields.coordinates[0][0];
        var lat  = photo.custom_fields.coordinates[0][1];
        var feature = {
            type: "Feature",
            properties: {
                name: name,
                index: i,
            },
            geometry: {
                type: "Point",
                coordinates: [
                    lon, lat
                ]
            }
        };
        geoJSON.features.push(feature);
    }
    return geoJSON;
};

var createTableData = function() {
    var tableData = [];

    var row = Ti.UI.createTableViewRow({
        className: 'separator', // used to improve table performance
        backgroundColor: 'transparent',
        rowIndex: -1, // custom property, useful for determining the row during events
        height: '20dp'
    });

    tableData.push(row);

    for (var i = 0; i < Raduga.photos.length; i++) {
        var photo = Raduga.photos[i];

        // Skip photo’s without sufficient metadata
        if (insufficientMetadata(photo)) {
            Ti.API.info('Photo ' + photo._id + ' does not have sufficient metadata to display in photo tab');
            continue;
        } else {
            Ti.API.info('Showing photo ' + photo._id);
        }

        // Titanium’s cloud service uses the "2014-02-13T14:27:39+0000" format
        // which is not recognised by the Date constructor in iOS
        // The Z is another way of saying GMT.
        photo.created_at = photo.created_at.replace('+0000','Z');

        if (photo.user.username === Ti.App.Properties.getString('username') && users.loggedIn()) {
            photo.owned = true;
        }

        var row = Ti.UI.createTableViewRow({
            className: 'rainbowPhoto', // used to improve table performance
            backgroundColor: 'transparent',
            rowIndex: i, // custom property, useful for determining the row during events
        });

        Ti.API.info('rowindex: ' + i);
        Ti.API.info('place: ' + photo.custom_fields.name_en);


        var rainbowImage = Ti.UI.createImageView({
            defaultImage: 'ui/transparant_pixel.png',
            image: Platform.width < 640 ? photo.urls.medium_640 : photo.urls.large_1024,
            left: 0,
            top: 0,
            width: Platform.width
        });
        row.add(rainbowImage);

        // with an almost transparent background that helps to keep text readable on white photos
        // and some very low tech padding with space " " ( thanks https://developer.appcelerator.com/question/50441/padding-on-a-label#answer-237825 )
        var labelCity = UI.createLabel({
            backgroundColor: 'rgba(0,0,0,0.1)',
            color: 'white',
            text: " " + photo.custom_fields[Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en'] + " ",
            width: Ti.UI.SIZE,
            top: '3dp',
            left: '10dp'
        });
        row.add(labelCity);

        var labelUserAndDate = UI.createLabel({
            backgroundColor: 'rgba(0,0,0,0.1)',
            color: 'white',
            text: " " + photo.user.username + " " + utils.Date2PonyDate(new Date(photo.created_at)) + " — " + utils.Date2PonyHour(new Date(photo.created_at)) + " ",
            width: Ti.UI.SIZE,
            top: '27dp',
            left: '10dp'
        });
        row.add(labelUserAndDate);

        var photoShareButton = Ti.UI.createView({
            id :"share_"+ i,
            width: '60dp',
            height: '60dp',
            bottom: 0,
            left: 0,
        });
        var photoShareButtonImage = Ti.UI.createImageView({
            id :"share_image_" + i,
            image: 'ui/icons/share.png',
            width: '27dp',
            height: '30dp',
            bottom: '10dp',
            left: '10dp'
        });
        photoShareButton.add(photoShareButtonImage);
        row.add(photoShareButton);

        if (photo.owned) {
            var photoDeleteButton = Ti.UI.createView({
                id :"delete_"+ i,
                width: '60dp',
                height: '60dp',
                bottom: 0,
                right: 0,
            });
            var photoDeleteButtonImage = Ti.UI.createImageView({
                id :"delete_image_" + i,
                image: 'ui/icons/delete.png',
                width: '18dp',
                height: '25dp',
                bottom: '10dp',
                right: '10dp'
            });
            photoDeleteButton.add(photoDeleteButtonImage);
            row.add(photoDeleteButton);
        }

        if(Platform.ios) {
            row.setSelectionStyle(Ti.UI.iPhone.TableViewCellSelectionStyle.NONE);
        }

        tableData.push(row);

        var row = Ti.UI.createTableViewRow({
            className: 'separator', // used to improve table performance
            backgroundColor: 'transparent',
            rowIndex: -1, // custom property, useful for determining the row during events
            height: '2dp'
        });

        tableData.push(row);


    }
    return tableData;
};

var tableView = Ti.UI.createTableView({
    top: '0dp',
    minRowHeight: '0dp',
    separatorColor: 'transparent',
    backgroundColor: 'transparent',
    data: createTableData()
});

tableView.addEventListener("touchstart", function(e){
    // only the delete button has an id, in other cases we show the share dialog:
    if ( e.source.id && e.source.id.match(/^share_/) ) {
        Ti.API.info("click registerd on share button");
        var photo = Raduga.photos[e.row.rowIndex];
        var city = photo.custom_fields[Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en'];
        var username = photo.user.username;

        if(Platform.ios && Social.isActivityViewSupported()){
            Ti.API.info("Social activity registered");
            Social.activityView({
                text: String.format(L('photo_caption'), username, city),
                image: photo.urls.original,
            });
        } else {
            //implement sharing Android
        }
    } else if ( e.source.id && e.source.id.match(/^delete_/) ) {
        Ti.API.info("click registerd on delete button");
        var photo = Raduga.photos[e.row.rowIndex];

        var dialog = Ti.UI.createAlertDialog({
            cancel : 1,
            buttonNames : [L('confirm'), L('cancel')],
            message : L('delete_confirm_message'),
            title : L('delete')
        });
        dialog.addEventListener('click', function(e) {
            if (e.index === e.source.cancel) {
                Ti.API.info('The cancel button was clicked');
                return;
            }
            Ti.API.info("Trying to delete");
            deletePhoto(photo);
        });
        dialog.show();
    }
});


if (Platform.ios) {
    tableView.setSeparatorStyle(Ti.UI.iPhone.TableViewSeparatorStyle.NONE);
}

photosWindow.add(tableView);


/* Map Window */

var mapWebView = Ti.UI.createWebView({
    url : 'html/index.html',
    width: '100%',
    width: Platform.width,
    height: Platform.height,
    disableBounce: true
});

mapWebView.addEventListener('load', function() {
    // If someone clicks on the map before they set up their location; center on Moscow
    var city = Ti.App.Properties.getString('city_name_en') ? Ti.App.Properties.getString('city_name_en') : 'Moscow';
    Ti.API.info("Centering map on " + city);
    mapWebView.evalJS('initMap("' + city +'", ' + JSON.stringify(photos2Features()) + ');');
});

var updateMap = function() {
    mapWindow.add(mapWebView);
};

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
    window: mapWindow,
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

Ti.App.addEventListener('startedLoading', function() {
    activityIndicator.show();
});
Ti.App.addEventListener('stoppedLoading', function() {
    activityIndicator.hide();
});
Ti.App.addEventListener('user_status_change', function() {
    settings.refreshUI();
});
Ti.App.addEventListener('loggedIn', initPush);
Ti.App.addEventListener('loggedIn', function() {
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

var initWithNetwork = function() {
    Ti.API.info("initialising app, presuming network connectivity");
    users.updateUser();
    globe.update();
    updatePhotos();
    updateMap();
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

    var slug; //= '16:00'; set a slug by hand for debugging purposes

    globe.update();
    globe.updateColours();
    settings.updateColours();

    Raduga.currentGradientslug = gradients.gradientSlug();
};

var colourTimer = setInterval(updateColours, 300000);
updateColours();

Ti.App.addEventListener('rainbowClicked', function(e) {
    tabGroup.setActiveTab(photosTab);
    Ti.API.info('click on index ' + e.index );
    Ti.API.info(Raduga.photos.length);
    Ti.API.info(JSON.stringify(Raduga.photos[parseInt(i)]));
    Ti.API.info(JSON.stringify(Raduga.photos));
    setTimeout(function() {
        Ti.API.info('scrolling to image, I hope');
        var animationOptions = Ti.Platform.ios ? { animated: true, position: Ti.UI.iPhone.TableViewScrollPosition.NONE} : null;
        tableView.scrollToIndex(parseInt(e.index), animationOptions);
    }, 1000);
});

