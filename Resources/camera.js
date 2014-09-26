// Set up screen

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
    cameraWindow.setBackgroundGradient(currentGradient());
    cameraProgressBar.show();

    var now = new Date().toISOString();
    var mime = media.mimeType;
    var extension = mime2extensionDict[mime];
    if (!extension) {
        // theoretically, this should never throw: the regex above won’t allow for unknown extensions
        // better safe than sorry
        alertError("The extension of photo your camera takes " + extension + " is unrecognised");
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
                alertError('Failed uploading photo metadata, API trouble: ' + this.responseText);
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
                        alertError('Failed uploading photo file, API trouble: ' + this.responseText);
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
                    alertError('Failed uploading photo file: ' + e.error + '\n\n' + this.responseText);
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
            alertError('Failed uploading metadata camera: ' + e.error);
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
        alertError(L("signin_before_upload"));
        tabGroup.setActiveTab(settingsTab);
        return false;
    }

    if (Ti.Network.getNetworkTypeName() === "NONE") {
        alertError(L("camera_no_internet"));
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
                setTimeout(function() { Raduga.cameraAvailable = true; }, 1000);
                uploadPhoto(event.media);
            } else {
                alertError("Camera got the wrong type back: " + event.mediaType);
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

