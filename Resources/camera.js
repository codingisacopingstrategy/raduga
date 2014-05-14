// Set up screen

var cameraScrollView = Ti.UI.createScrollView({
  contentWidth: 'auto',
  contentHeight: 'auto',
  height: '80%',
  width: '100%'
});


var cameraLabel = Ti.UI.createLabel({
    color: 'white',
    top: '10dp', left: '10dp', right: '10dp'
});
var uploadButton = Ti.UI.createButton({
   titleid: 'upload',
   top: 10,
   width: 100
});

Raduga.callingCamera = false; // this might not be save across threads
Raduga.tempFile = null;

var resetCameraWindow = function() {
    cameraScrollView.removeAllChildren(); //TODO: also remove event listeners
    Raduga.callingCamera = false;
};

var uploadPhoto = function(media) {
    var photo = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, Raduga.tempFile);
    var photo = Ti.Filesystem.getFile('ui/upload_test_photo.jpg');
    /*if (!Raduga.tempFile) {
        return false;
    }*/
    Cloud.Photos.create({
        photo: photo,
        custom_fields: {
            "city_name_en": Ti.App.Properties.getString('city_name_en'),
            "city_name_ru": Ti.App.Properties.getString('city_name_ru'),
            "coordinates": [Ti.App.Properties.getString('city_lon'), Ti.App.Properties.getString('city_lat')]
         },
    }, function (e) {
        if (e.success) {
            var photo = e.photos[0];
            alert('Success:\n' +
                JSON.stringify(photo, null, 2)
                );
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
};

uploadButton.addEventListener('click', uploadPhoto);

// Camera Behaviour

// from the example http://docs.appcelerator.com/titanium/3.0/#!/guide/Camera_and_Photo_Gallery_APIs :
var showCam = function() {
    if (Raduga.callingCamera) {
        Ti.API.info("called showCam, but not listening");
        return null;
    }
    Raduga.callingCamera = true;
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
                alertError("got the wrong type back =" + event.mediaType);
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
