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
    Ti.API.info(JSON.stringify(photoData));

//    curl -i -d '{"filename":"upload_test_photo.jpg","content_type":"image/jpeg","size":203267,"custom_fields":{"name_en":"Bataysk","name_ru":"Батай��к","coordinates":[[39.733,47.167]]},"user":{"username":"craftsman72"},"created_at":"2014-05-15T10:07:59.953Z","updated_at":"2014-05-15T10:07:59.953Z","processed":false}' --user 43234a2b2blabausername: -H 'Content-Type: application/json' http://vps40616.public.cloudvps.com/photos/

    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.info("Received text: " + this.responseText);
        },
        onerror: function(e) {
            alertError('Failed uploading metadata camera: ' + e.error);
        }
    });

    // Here we upload the metadata FIXME: we should also upload the file itself
    var authstr = 'Basic ' + Ti.Utils.base64encode(Ti.App.Properties.getString('userid') + ':');
    Ti.API.info(authstr);
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

