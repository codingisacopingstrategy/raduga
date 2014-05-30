// Set up screen

var cameraScrollView = Ti.UI.createScrollView({
  contentWidth: 'auto',
  contentHeight: 'auto',
  height: '80%',
  width: '100%'
});


var cameraLabel = Ti.UI.createLabel({
    color: 'black',
    top: '10dp', left: '10dp', right: '10dp'
});
var uploadButton = Ti.UI.createButton({
   titleid: 'upload',
   top: 10,
   width: 100
});

Raduga.callingCamera = false;
Raduga.tempFile = null;

var resetCameraWindow = function() {
    cameraScrollView.removeAllChildren(); //TODO: also remove event listeners
    Raduga.callingCamera = false;
};

var uploadPhoto = function(media) {

    if (!Ti.App.Properties.getString('username')) {
        alertError("You need to login to upload a photo");
        return false;
    }

    var authstr = 'Basic ' + Ti.Utils.base64encode(Ti.App.Properties.getString('userid') + ':');

    // for now we are just trying with a test image,
    // to get the upload process right
    /* var photo = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, Raduga.tempFile);
    if (!Raduga.tempFile) {
        return false;
    }*/
    var photo = Ti.Filesystem.getFile('ui/upload_test_photo.jpg');

    var now = new Date().toISOString();
    var matchExtension = photo.name.match(/\.png$|\.jpg$|\.jpeg$|\.gif$|\.tif$|\.tiff$/i);
    if (matchExtension) {
        var extension = matchExtension[0].toLowerCase();
    } else {
        alertError("The type of photo your camera takes, " + photo.name + ", is unrecognised");
        return false;
    }
    var mime = extension2mimeDict[extension];
    if (!mime) {
        // theoretically, this should never throw: the regex above won’t allow for unknown extensions
        // better safe than sorry
        alertError("The extension of photo your camera takes " + extension + " is unrecognised");
        return false;
    }
    var photoData = {
        filename: photo.name,
        content_type: mime,
        size: photo.size,
        custom_fields: {
            "name_en": Ti.App.Properties.getString('city_name_en'),
            "name_ru": Ti.App.Properties.getString('city_name_ru'),
            "coordinates": [ [parseFloat(Ti.App.Properties.getString('city_lon')), parseFloat(Ti.App.Properties.getString('city_lat'))] ]
        },
        user: {
            username: Ti.App.Properties.getString('username')
        },
        created_at: now,
        updated_at: now,
        processed: false
    };

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
                },
                onerror: function(e) {
                    Ti.API.info(this.responseText);
                    alertError('Failed uploading photo file: ' + e.error + '\n\n' + this.responseText);
                }
            });
Ti.API.info(response._links.self.href);
            secondXhr.open('PATCH', 'http://' + response._links.self.href);
            secondXhr.setRequestHeader('If-Match', response._etag);
            secondXhr.setRequestHeader('Authorization', authstr);
            secondXhr.send({
                id: response._id,
                image: photo.read.blob,
            });

        },
        onerror: function(e) {
            alertError('Failed uploading metadata camera: ' + e.error);
        }
    });

    // Here we upload the metadata
//    xhr.open('POST','http://127.0.0.1:5000/photos/');
    xhr.open('POST','http://vps40616.public.cloudvps.com/photos/');
    xhr.setRequestHeader("Content-Type","application/json; charset=utf-8");
    xhr.setRequestHeader('Authorization', authstr);
    xhr.send(JSON.stringify(photoData));
};

uploadButton.addEventListener('click', uploadPhoto);

// Camera Behaviour

// this is not called for now (fix the upload first with a test image)
// from the example http://docs.appcelerator.com/titanium/3.0/#!/guide/Camera_and_Photo_Gallery_APIs :
var showCam = function() {
    if (Raduga.callingCamera) {
        Ti.API.info("called showCam, but not listening");
        return null;
    }
    Raduga.callingCamera = true;
    return true;
    Ti.API.info("called showCam");
    Ti.Media.showCamera({
        success:function(event) {
            Ti.API.info('application folder', Ti.Filesystem.getApplicationDataDirectory());
            // called when media returned from the camera
            Ti.API.info('Our type was: '+event.mediaType);
            if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                imageFileName = new Date().toISOString() + '.jpg';
                /* var f = Ti.Filesystem.getFile(Ti.Filesystem.getApplicationDataDirectory(), imageFileName);
                f.write(event.media); */
                Raduga.tempFile = imageFileName;
                var imageView = Ti.UI.createImageView({
                    width: cameraWindow.width,
                    height: cameraWindow.height,
                    image: event.media
                });

                cameraScrollView.add(imageView);
                cameraLabel.setText('Uploading photo as user ' + Ti.App.Properties.getString('username') +
                    'from city: ' + cityName() );
                cameraScrollView.add(cameraLabel);
                cameraScrollView.add(uploadButton);
                cameraWindow.add(cameraScrollView);

            } else {
                alertError("Camera got the wrong type back: " + event.mediaType);
            }
        },
        cancel:function() {
                alert("called when user cancels taking a picture"); //TODO: close window, go to home tab
        },
        error:function(error) {
            // called when there's an error
            var a = Ti.UI.createAlertDialog({title:L('camera')});
            if (error.code == Ti.Media.NO_CAMERA) {
                a.setMessage('Please run this test on device');
            } else {
                a.setMessage(L('error') + ': ' + error.code);
            }
            a.show();
        },
        saveToPhotoGallery: true,
        allowEditing: true,
        autoHide: true,
        mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
    });
};

