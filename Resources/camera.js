var usernameLabel = Titanium.UI.createLabel({
    color: '#821785',
    text: 'User Name',
    top: 10, left: 10,
    width: 250
});

// Set up screen

var cameraLabel = Titanium.UI.createLabel({
    color: '#821785',
    text: 'Take picture',
    top: '10dp', left: '10dp', right: '10dp'
});
cameraWindow.add(cameraLabel);
Raduga.callingCamera = false; // this might not be save across threads
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
            // called when media returned from the camera
            Ti.API.info('Our type was: '+event.mediaType);
            if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                var imageView = Ti.UI.createImageView({
                    width:cameraWindow.width,
                    height:cameraWindow.height,
                    image:event.media
                });
                cameraWindow.add(imageView);
            } else {
                alert("got the wrong type back ="+event.mediaType);
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
