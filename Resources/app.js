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

var cameraWindow = Ti.UI.createWindow({
    orientationModes: [Ti.UI.PORTRAIT],
    backgroundColor: 'black',
    navBarHidden: true,
});

var settingsWindow = Ti.UI.createWindow({
    orientationModes: [Ti.UI.PORTRAIT],
    backgroundGradient: gradients.currentSettingsGradient(),
    navBarHidden: true,
});

if (Platform.ios) {
    photosWindow.setStatusBarStyle(Ti.UI.iPhone.StatusBar.DARK_CONTENT);
    photosWindow.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
    globe.window.setStatusBarStyle(Ti.UI.iPhone.StatusBar.LIGHT_CONTENT);
    globe.window.setExtendEdges([Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM]);
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

// Set up Camera Window

var cameraProgressBar = Ti.UI.createProgressBar({
    width:200,
    height:50,
    min:0,
    max:1,
    value:0,
    top:10,
    message:'Uploading image',
    color: 'rgb(103,103,113)',
});

cameraWindow.add(cameraProgressBar);

var close = function() {
    cameraWindow.setBackgroundGradient({});
    cameraProgressBar.hide();
    cameraProgressBar.value = 0;
};

var uploadPhoto = function(media) {
    Ti.API.info("uploadPhoto called");
    cameraWindow.setBackgroundGradient(gradients.currentGradient());
    cameraProgressBar.show();

    var now = new Date().toISOString();
    var mime = media.mimeType;
    var extension = utils.mime2extensionDict[mime];
    if (!extension) {
        // theoretically, this should never throw: the regex above won’t allow for unknown extensions
        // better safe than sorry
        UI.alertError("The extension of photo your camera takes " + extension + " is unrecognised");
        return false;
    }
    var filename = now + '_raduga_by_' + Ti.App.Properties.getString('username') + extension;

    var photoData = {
        filename: filename,
        content_type: mime,
        size: media.size,
        custom_fields: {
            "name_en": Ti.App.Properties.getString('city_name_en'),
            "name_ru": Ti.App.Properties.getString('city_name_ru'),
            "coordinates": [ [parseFloat(Ti.App.Properties.getString('city_lon')), parseFloat(Ti.App.Properties.getString('city_lat'))] ]
        },
        user: {
            username: Ti.App.Properties.getString('username'),
            id: Ti.App.Properties.getString('userid')
        },
        created_at: now,
        updated_at: now,
        processed: false
    };

    var authstr = 'Basic ' + Ti.Utils.base64encode(Ti.App.Properties.getString('userid') + ':');

    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            response = JSON.parse(this.responseText);
            Ti.API.info(JSON.stringify(response));

            if (response._status === "ERR") {
                UI.alertError('Failed uploading photo metadata, API trouble: ' + this.responseText);
                return false;
            }
            Ti.API.info("Succesfully uploaded photo metadata, with _id " + response._id + " to the server");

            // now upload the image itself:
            var secondXhr = Titanium.Network.createHTTPClient({
                onload: function(e) {
                    // example response:
                    // {"_updated":"Thu, 29 May 2014 15:57:29 GMT","_status":"OK","_id":"538758e922497d0249bb9662","_links":{"self":{"href":"127.0.0.1:5000/photos/538758e922497d0249bb9662","title":"Photo"}},"_etag":"bfb6ba7eb0ff446e682b6be0f9cc6b28d7e09ae1"}

                    response = JSON.parse(this.responseText);
                    if (response._status === "ERR") {
                        UI.alertError('Failed uploading photo file, API trouble: ' + this.responseText);
                        return false;
                    }
                    Ti.API.info("Succesfully uploaded photo: " + JSON.stringify(response));

                    // We are done here!
                    // switch to the tab that shows the photos
                    tabGroup.setActiveTab(photosTab);
                    close();
                },
                onerror: function(e) {
                    Ti.API.info(this.responseText);
                    UI.alertError('Failed uploading photo file: ' + e.error + '\n\n' + this.responseText);
                    close();
                },
                onsendstream: function(e) {
                    cameraProgressBar.value = e.progress ; // continously sends values from 0 until 1
                }
            });

            secondXhr.open('POST', 'http://' + response._links.self.href);
            secondXhr.setRequestHeader('X-HTTP-Method-Override', 'PATCH');  // in iOS we can sent a PATCH request directly,
                                                                            // but in (Titanium’s implementation of) Android we can’t
//            Concurrency checking disabled for now, because of https://github.com/nicolaiarocci/eve/issues/369 (is going to be available in 0.5)
//            secondXhr.setRequestHeader('If-Match', response._etag);
            secondXhr.setRequestHeader('Authorization', authstr);
            secondXhr.send({
                id: response._id,
                image: media,
            });

        },
        onerror: function(e) {
            UI.alertError('Failed uploading metadata camera: ' + e.error);
            close();
        }
    });

    // Here we upload the metadata
//    xhr.open('POST','http://192.168.0.10:5000/photos/');
    xhr.open('POST','http://vps40616.public.cloudvps.com/photos/');
    xhr.setRequestHeader("Content-Type","application/json; charset=utf-8");
    xhr.setRequestHeader('Authorization', authstr);
    xhr.send(JSON.stringify(photoData));
};

// Camera Behaviour

// from the example http://docs.appcelerator.com/titanium/3.0/#!/guide/Camera_and_Photo_Gallery_APIs :
var showCam = function() {
    // this is to prevent the bug noted a bit further down
    if (!Raduga.cameraAvailable) {
        Ti.API.info('tried to trigger showCam while still locked');
        return;
    }

    Ti.API.info("showCam called");

    if (!Ti.App.Properties.getString('sessionID')) {
        UI.alertError(L("signin_before_upload"));
        tabGroup.setActiveTab(settingsTab);
        return false;
    }

    if (Ti.Network.getNetworkTypeName() === "NONE") {
        UI.alertError(L("camera_no_internet"));
        tabGroup.setActiveTab(photosTab);
        return false;
    }

    Ti.Media.showCamera({
        success:function(event) {
            if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                // there is a bug with the tab getting focus whenever a picture
                // is taken, which triggers the camera, causing a loop
                // this is a really crude way around it: lock the camera,
                // and make it available after a second.
                Raduga.cameraAvailable = false;
                setTimeout(function() { Raduga.cameraAvailable = true; }, 4000);
                uploadPhoto(event.media);
            } else {
                UI.alertError("Camera got the wrong type back: " + event.mediaType);
            }
        },
        cancel:function() {
                // called when user cancels taking a picture
                tabGroup.setActiveTab(photosTab);
                close();
        },
        error:function(error) {
            close();
            // called when there's an error
            var a = Ti.UI.createAlertDialog({title:L('camera')});
            if (error.code == Ti.Media.NO_CAMERA) {
                a.setMessage('Please run this test on device');
                // if one wants to test uploading photos from the simulator, enable this code:
                // var photo = Ti.Filesystem.getFile('ui/upload_test_photo.jpg');
                // uploadPhoto(photo.read.blob);
            } else {
                a.setMessage(L('error') + ': ' + error.code);
            }
            a.show();
        },
        saveToPhotoGallery: true,
        autoHide: true,
        mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
    });
};


// Cities Selection

var citiesWindow = Ti.UI.createWindow({
    modal: true
});

var tableData = [];

var cityNameField = Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en';
for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    tableData.push({ title: city[cityNameField], val: city });
}

var citiesSearch = Ti.UI.createSearchBar({
    barColor:'#000',
    showCancel:true,
    height:43,
    top:0,
});

var citiesTable = Ti.UI.createTableView({
    top: '20dp',
    data: tableData,
    search: citiesSearch
});

citiesWindow.add(citiesTable);
citiesSearch.addEventListener('cancel', function(e) {
    citiesWindow.close();
});

// Settings Form Window

/* View code */
var activityIndicator = Ti.UI.createActivityIndicator({
    height: Ti.UI.SIZE,
    width: Ti.UI.SIZE,
    style: Platform.ios ? Ti.UI.iPhone.ActivityIndicatorStyle.BIG : Ti.UI.ActivityIndicatorStyle.BIG,
    backgroundColor: 'rbga(255,255,255,0.2)',
    borderRadius: '5dp'
});

var rainbowExplanationHeadingLabel = UI.createLabel({
    font: { fontSize: "16dp", fontWeight: 'bold' },
    top: '10dp',
    width: Platform.width * .8125,
    height: Ti.UI.SIZE,
    text: L('where_rainbow')
});
var rainbowExplanationLabel = UI.createLabel({
    font: { fontSize: "16dp" },
    top: '0dp',
    width: Platform.width * .8125,
    height: Ti.UI.SIZE,
    text: L('where_rainbow_explanation')
});

var usernameLoggedInLabel = UI.createLabel({
    font: { fontSize: "14dp" },
    color: 'black',
    text: L('username') + ': ',
    top: '10dp',
    width: Platform.width * .75,
});
var usernameNewUserLabel = UI.createLabel({
    font: { fontSize: "14dp" },
    color: 'black',
    text: L('sign_in_as_new_user'),
    bottom: '1dp',
    left: '6dp',
    width: Ti.UI.SIZE,
});
var usernameNewUserLabelUnderLine = Ti.UI.createView({
    backgroundColor: 'black',
    height: '1dp',
    left: '6dp',
    width: '127dp',
    bottom: 0,
});
var usernameNewUserView = Ti.UI.createView({
    top: '10dp',
    height: '20dp',
    width: Platform.width * .75,
});
usernameNewUserView.add(usernameNewUserLabel);
usernameNewUserView.add(usernameNewUserLabelUnderLine);


var usernameTextField = UI.createTextField({
    hintText: L('username'),
    autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
});
var passwordTextField = UI.createTextField({
    hintText: L('password'),
    passwordMask: true
});
var passwordCheckTextField = UI.createTextField({
    hintText: L('password_again'),
    passwordMask: true
});

var loginButton  = UI.createButton('login');
var logoutButton = UI.createButton('logout');
var signupButton = UI.createButton('signup');

var notificationsView = Ti.UI.createView({
    top: '10dp',
    height: '31dp',
    width: '260dp',
});
var notificationsLabel = UI.createLabel({
    color: 'black',
    textid: 'notifications',
    font: { fontSize: "14dp" },
    left: '6dp',
    bottom: '4dp',
});
var notificationsSwitch = Ti.UI.createSwitch({
    value: Ti.App.Properties.getString('notifications') !== 'false',
    right: '0',
    bottom: '0',
});
notificationsView.add(notificationsLabel);
notificationsView.add(notificationsSwitch);

var cityTextField = UI.createTextField({
    hintText: L('city'),
    value: Ti.App.Properties.getString(Platform.currentLanguage === 'ru' ? 'city_name_ru' : 'city_name_en'),
});

var linkTermsLabel = UI.createLabel({
    font: { fontSize: "12dp" },
    color: 'black',
    text: L('terms'),
    left: '0', bottom: '1dp',
    width: Ti.UI.SIZE
});
var linkTermsLabelUnderLine = Ti.UI.createView({
    backgroundColor: 'black',
    height: '1dp',
    left: '0', bottom: '0dp',
    width: '101dp'
});
var linkAboutLabel = UI.createLabel({
    font: { fontSize: "12dp" },
    color: 'black',
    text: L('about'),
    right: 0, bottom: '1dp',
    width: Ti.UI.SIZE
});
var linkAboutLabelUnderLine = Ti.UI.createView({
    backgroundColor: 'black',
    height: '1dp',
    right: 0, bottom: 0,
    width: '82dp'
});
var linksView = Ti.UI.createView({
    top: '6dp',
    height: Ti.UI.SIZE,
    width: Platform.width * .8125,
});
linksView.add(linkTermsLabel);
linksView.add(linkTermsLabelUnderLine);
linksView.add(linkAboutLabel);
linksView.add(linkAboutLabelUnderLine);
var copyrightLabel = UI.createLabel({
    font: { fontSize: "12dp" },
    color: 'black',
    text: L('copyright'),
    top: '10dp',
    width: Ti.UI.SIZE,
});



// for Android has the toolbar on top
var settingsTopSpace = Ti.UI.createView({
    width: Platform.width,
    height: Platform.android ? '50dp': '20dp',
    top: 0, bottom: 0,
});

// for iOS, where the toolbar is below
var settingsBottomSpace = Ti.UI.createView({
    width: Platform.width,
    height: '50dp',
    top: '10dp',
});

var settingsScrollView = Ti.UI.createScrollView({
    width: Platform.width,
    height: Platform.height,
    contentWidth: Platform.width,
    contentHeight: 'auto',
    left: '0',
    top: '0',
    layout: 'vertical',
    showVerticalScrollIndicator: true,
    showHorizontalScrollIndicator: false
});

settingsWindow.add(settingsScrollView);
settingsWindow.add(activityIndicator);

//
// Saving settings
//
citiesTable.addEventListener('click', function(e) {
    cityTextField.value = e.rowData.title;
    Ti.App.Properties.setString('city_name_en', e.rowData.val.name_en);
    Ti.App.Properties.setString('city_name_ru', e.rowData.val.name_ru);
    Ti.App.Properties.setString('city_lat', e.rowData.val.lat);
    Ti.App.Properties.setString('city_lon', e.rowData.val.lon);
    citiesWindow.close();
    if (users.loggedIn()) {
        Cloud.Users.update({
            username: usernameTextField.value,
            custom_fields: {
                name_en: e.rowData.val.name_en,
                name_ru: e.rowData.val.name_ru,
                coordinates: [[e.rowData.val.lon, e.rowData.val.lat]],
                language: Platform.currentLanguage,
            }
        }, function (e) {
            if (e.success) {
                Ti.API.info('Succesfully updated location settings for user ' + e.users[0].username + " at " +
                Ti.App.Properties.getString('city_name_en') + '/' + Ti.App.Properties.getString('city_name_ru') +
                ' (' + parseFloat(Ti.App.Properties.getString('city_lon')) + ', ' +
                parseFloat(Ti.App.Properties.getString('city_lat')) + ')' );
            } else {
                UI.alertError('Failed updating location settings: ' + (e.error && e.message) || JSON.stringify(e));
            }
        });
    }
});
notificationsSwitch.addEventListener('change', function() {
    Ti.App.Properties.setString('notifications', String(notificationsSwitch.value));
    if (users.loggedIn()) {
        Cloud.Users.update({
            username: usernameTextField.value,
            custom_fields: {
                notifications: notificationsSwitch.value,
                language: Platform.currentLanguage,
            }
        }, function (e) {
            if (e.success) {
                Ti.API.info('Succesfully updated push notification settings for user ' + e.users[0].username);
            } else {
                UI.alertError('Failed updating push notification settings ' + (e.error && e.message) || JSON.stringify(e));
            }
        });
    }
});
// Automatically go to next field after return:
usernameTextField.addEventListener('return', function() {
    passwordTextField.focus();
});
usernameTextField.addEventListener('blur', function() {
    usernameTextField.setValue(usernameTextField.getValue().toLowerCase());
});
passwordTextField.addEventListener('return', function() {
    passwordCheckTextField.focus();
});
passwordCheckTextField.addEventListener('return', function() {
    cityTextField.focus();
});
passwordTextField.addEventListener('return', function() {
    passwordCheckTextField.focus();
});
passwordCheckTextField.addEventListener('return', function() {
    cityTextField.focus();
});

// the city selection window
cityTextField.addEventListener('focus', function(e) {
    cityTextField.blur();
    citiesWindow.open();
    citiesSearch.focus();
});

// setup actions for the various user labels
usernameNewUserLabel.addEventListener('click', users.newUser);
signupButton.addEventListener('click', function(){
    users.createUser(usernameTextField.value, passwordTextField.value, passwordCheckTextField.value, notificationsSwitch.value);
});
loginButton.addEventListener('click', function() {
    // if the username is known there is no textField:
    var username = usernameTextField.value ? usernameTextField.value : Ti.App.Properties.getString('username');
    users.loginUser(username, passwordTextField.value);
});
logoutButton.addEventListener('click', users.logoutUser);

// external links
linkTermsLabel.addEventListener('touchstart', function(){
    Ti.Platform.openURL("http://pinkponyexpress.nl/#63");
});
linkAboutLabel.addEventListener('touchstart', function(){
    Ti.Platform.openURL("http://pinkponyexpress.nl/#63");
});

var updateUserDialog = function() {
    settingsScrollView.removeAllChildren(); //TODO: also remove event listeners?
    settingsScrollView.add(settingsTopSpace);
    settingsScrollView.add(rainbowExplanationHeadingLabel);
    settingsScrollView.add(rainbowExplanationLabel);
    if (users.signedUp()) {
        usernameLoggedInLabel.setText(L('username') + ': ' + Ti.App.Properties.getString('username'));
        settingsScrollView.add(usernameLoggedInLabel);
        settingsScrollView.add(usernameNewUserView);
    } else {
        usernameTextField.value = '';
        cityTextField.value = '';
        settingsScrollView.add(usernameTextField);
    };
    if (users.loggedIn()) {
        passwordTextField.value = '';
        passwordCheckTextField.value = '';
    } else {
        // We are not logged in. Add the pass
        settingsScrollView.add(passwordTextField);
        if (!users.signedUp()) {
            settingsScrollView.add(passwordCheckTextField);
        }
    }
    settingsScrollView.add(cityTextField);
    settingsScrollView.add(notificationsView);
    // if a: x else if b: y else: z
    settingsScrollView.add(users.loggedIn() ? logoutButton : users.signedUp() ? loginButton : signupButton );
    settingsScrollView.add(linksView);
    settingsScrollView.add(copyrightLabel);
    if (Platform.ios) {
        settingsScrollView.add(settingsBottomSpace);
    }
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

Ti.App.addEventListener('startedLoading', function() {
    activityIndicator.show();
});
Ti.App.addEventListener('stoppedLoading', function() {
    activityIndicator.hide();
});
Ti.App.addEventListener('user_status_change', function() {
    updateUserDialog();
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
    updateUserDialog();
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

    globe.window                    .setBackgroundGradient(gradients.currentGradient(slug));
    settingsWindow                  .setBackgroundGradient(gradients.currentSettingsGradient(slug));
    usernameLoggedInLabel           .setColor(gradients.currentColour(slug));
    usernameLoggedInLabel           .setColor(gradients.currentColour(slug));
    rainbowExplanationHeadingLabel  .setColor(gradients.currentColour(slug));
    rainbowExplanationLabel         .setColor(gradients.currentColour(slug));
    usernameNewUserLabel            .setColor(gradients.currentColour(slug));
    usernameNewUserLabelUnderLine   .setBackgroundColor(gradients.currentColour(slug));
    notificationsLabel              .setColor(gradients.currentColour(slug));
    linkAboutLabel                  .setColor(gradients.currentColour(slug));
    linkTermsLabel                  .setColor(gradients.currentColour(slug));
    linkAboutLabelUnderLine         .setBackgroundColor(gradients.currentColour(slug));
    linkTermsLabelUnderLine         .setBackgroundColor(gradients.currentColour(slug));
    copyrightLabel                  .setColor(gradients.currentColour(slug));

    globe.update();

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

