// photosWindow behaviour
var utils = require('utils');
var UI = require('ui');
var Platform = require('platform');
var gradients = require('gradients');
var users = require('users');

if (Platform.ios) {
    var Social = require('dk.napp.social');
    Ti.API.info(["Facebook available: " + Social.isFacebookSupported(),
                 "Twitter available: " + Social.isTwitterSupported(),
                 "SinaWeibo available: " + Social.isSinaWeiboSupported()].join(" "));
}

var i = 0;
var photosWindow = Ti.UI.createWindow({
    orientationModes: [Ti.UI.PORTRAIT],
    backgroundColor: 'white',
    navBarHidden: true,
});

var photoCache = [];

var updatePhotos = function() {
    var url = 'http://vps40616.public.cloudvps.com/photos/?where={"processed":true}&projection={"image":0}';
    // var url = 'http://127.0.0.1:5000/photos/?where={"processed":true}&projection={"image":0}';
    var json;
    Ti.API.info('updating photos / spotted rainbows from ' + url);

    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            // parse the retrieved data, turning it into a JavaScript object
            json = JSON.parse(this.responseText);
            var photos = json._items;
            Ti.API.info('found on the internet ' + photos.length + ' photos / rainbows');
            Ti.App.fireEvent('spottedRainbows', { rainbows : photos});
            // fill the photo-tab
            photoCache = photos;
            tableView.setData(createTableData(photos));
        },
        onerror: function(error) {
            if (Ti.Network.getNetworkTypeName() === "NONE" || error.code === -1009 || error.code === -1003 || error.code === -1004 || error.code === -1001) {
                /** If the telephone is not connected to the internet, this is not actually an error */
               /** btw, error -1004 is when there is network but it can’t find the internet
                * -1009 is when there is no internet connection (is supposed to be found by getNetworkTypeName, but apparently not always)                 * -1003 is when a server with this hostname could not be found                 * -1001 is when the server times out (probably a connection problem as well) */
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
            if (Ti.Network.getNetworkTypeName() === "NONE" || error.code === -1009 || error.code === -1003 || error.code === -1004 || error.code === -1001) {
                /** If the telephone is not connected to the internet, this is not actually an error */
               /** btw, error -1004 is when there is network but it can’t find the internet
                * -1009 is when there is no internet connection (is supposed to be found by getNetworkTypeName, but apparently not always)                 * -1003 is when a server with this hostname could not be found                 * -1001 is when the server times out (probably a connection problem as well) */
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
    Ti.API.info(photo._etag);
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


var createTableData = function(photos) {
    var tableData = [];

    var row = Ti.UI.createTableViewRow({
        className: 'separator', // used to improve table performance
        backgroundColor: 'transparent',
        rowIndex: -1, // custom property, useful for determining the row during events
        height: '20dp'
    });

    tableData.push(row);

    for (i = 0; i < photos.length; i++) {
        var photo = photos[i];

        // Skip photo’s without sufficient metadata
        if (insufficientMetadata(photo)) {
            Ti.API.info('Photo ' + photo._id + ' does not have sufficient metadata to display in photo tab');
            continue;
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

        Ti.API.info('rowindex: ' + i + ' place: ' + photo.custom_fields.name_en + ' id: ' + photo.id );

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
    top: 0,
    minRowHeight: 0,
    separatorColor: 'transparent',
    backgroundColor: 'transparent',
    data: []
});

tableView.addEventListener("touchstart", function(e){
    // only the delete button has an id, in other cases we show the share dialog:
    if ( e.source.id && e.source.id.match(/^share_/) ) {
        Ti.API.info("click registerd on share button");
        var photo = photoCache[e.row.rowIndex];
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
        var photo = photoCache[e.row.rowIndex];

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

exports.Photos = function() {
    this.window = photosWindow;
    this.insufficientMetadata = insufficientMetadata;
    this.update = updatePhotos;
    this.tableView = tableView;
};

exports.insufficientMetadata = insufficientMetadata;

