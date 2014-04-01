var usernameLabel = Titanium.UI.createLabel({
    color: 'white',
    text: 'User Name',
    top: 10, left: 10,
    width: 250
});

// Set up screen

var cameraLabel = Titanium.UI.createLabel({
    color: 'white',
    text: 'Take picture',
    top: '10dp', left: '10dp', right: '10dp'
});
var uploadButton = Titanium.UI.createButton({
   title: 'Upload',
   top: 10,
   width: 100
});

Raduga.callingCamera = false; // this might not be save across threads
Raduga.tempFile = null;

var resetCameraWindow = function() {
    cameraWindow.remove(imageView);
    cameraWindow.remove(cameraLabel);
    cameraWindow.remove(uploadButton);

    Raduga.callingCamera = false;
};

var uploadPhoto = function(media) {
    if (!Raduga.tempFile) {
        return false;
    }
    Cloud.Photos.create({
        photo: Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, Raduga.tempFile),
        custom_fields : {
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
    Titanium.Media.showCamera({
        success:function(event) {
            Ti.API.info('application folder', Titanium.Filesystem.getApplicationDataDirectory());
            // called when media returned from the camera
            Ti.API.info('Our type was: '+event.mediaType);
            if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                imageFileName = new Date().toISOString() + '.jpg';
                var f = Titanium.Filesystem.getFile(Titanium.Filesystem.getApplicationDataDirectory(), imageFileName);
                f.createFile();
                f.write(event.media);
                Raduga.tempFile = imageFileName;
                var imageView = Ti.UI.createImageView({
                    width: cameraWindow.width,
                    height: cameraWindow.height,
                    image: event.media
                });
                cameraWindow.add(imageView);
                cameraWindow.add(cameraLabel);
                cameraLabel.setText('Uploading photo as user ' + Ti.App.Properties.getString('username') +
                                    'from city: ' + cityName() );
                cameraWindow.add(uploadButton);
            } else {
                alert("got the wrong type back =" + event.mediaType);
            }
        },
        cancel:function() {
                alert("called when user cancels taking a picture");
        },
        error:function(error) {
            // called when there's an error
            var a = Titanium.UI.createAlertDialog({title:'Camera'});
            if (error.code == Titanium.Media.NO_CAMERA) {
                a.setMessage('Please run this test on device');
            } else {
                a.setMessage('Unexpected error: ' + error.code);
            }
            a.show();
        },
        saveToPhotoGallery: true,
        allowEditing: true,
        autoHide: true,
        mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
    });
};
