var Cloud = require('ti.cloud');

/* Set up project structure */
// something like this?
// http://stackoverflow.com/questions/2573592/how-to-organize-js-files-in-a-appcelerator-titanium-project
var app = {
  views: {},
  controllers: {},
  models: {
      photos: []
  },
  ui: {}
};

var Raduga = {};

Ti.include('users.js');

/* Utility Functions */

var zeroPad = function(n) {
    var str = String(n);
    return str.length === 1 ? '0' + str : str;
};
var Date2PonyDate = function(d) {
    return zeroPad(d.getDay()) + '.' + zeroPad(d.getMonth()) + '.' + d.getFullYear();
};

var Date2PonyHour = function(d) {
    return zeroPad(d.getHours()) + ':' + zeroPad(d.getMinutes());
};

/* Set up UI */

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// Windows
//
var predictionWindow = Titanium.UI.createWindow({
    backgroundColor: '#000',
    top: '20dp',
    navBarHidden: true,
    statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

var shareWindow = Titanium.UI.createWindow({
    backgroundColor: '#000',
    top: '20dp',
    navBarHidden: true,
    statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

var cameraWindow = Titanium.UI.createWindow({
    backgroundColor: '#000',
    top: '20dp',
    navBarHidden: true,
    statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

var settingsWindow = Titanium.UI.createWindow({
    backgroundColor: '#000',
    top: '20dp',
    layout: 'vertical',
    navBarHidden: true,
    statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});


// PredictionWindow behaviour

Cloud.Photos.query({
    page: 1,
    per_page: 20,
}, function (e) {
    if (e.success) {
        Ti.API.info('found on the internet ' + e.photos.length + ' photos');
        app.models.photos = e.photos;
        listView.setSections([createPhotoData()]);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});


var plainTemplate = {
    childTemplates: [
        {
            type: 'Ti.UI.Label', // Use a label
            bindId: 'date',  // Bind ID for this label
            properties: {        // Sets the Label.left property
                left: '0dp'
            }
        },
        {
            type: 'Ti.UI.ImageView',  // Use an image view
            bindId: 'pic',            // Bind ID for this image view
            properties: {
                width: '100%',
            }
        },
        {
            type: 'Ti.UI.Button',   // Use a button
            bindId: 'button',       // Bind ID for this button
            properties: {           // Sets several button properties
                width: '80dp',
                height: '30dp',
                right: '10dp',
                title: 'press me'
            },
            events: { click : function() {
                // Binds a callback to the button's click event
            } }
        }
    ]
};
var listView = Ti.UI.createListView({
    // Maps the plainTemplate object to the 'plain' style name
    templates: { 'plain': plainTemplate },
    // Use the plain template, that is, the plainTemplate object defined earlier
    // for all data list items in this list view
    defaultItemTemplate: 'plain'
});

var createPhotoData = function() {
    Ti.API.info('creating photo data for ' + app.models.photos.length + ' photos');
    var data = [];
    for (var i = 0; i < app.models.photos.length; i++) {
        photo = app.models.photos[i];

        // Titanium’s cloud service uses the "2014-02-13T14:27:39+0000" format
        // which is not recognised by the Date constructor in iOS
        // The Z is another way of saying GMT.
        photo.created_at = photo.created_at.replace('+0000','Z');

        data.push({
            // Maps to the rowtitle component in the template
            // Sets the text property of the Label component
            date: { text: Date2PonyDate(new Date(photo.created_at)) },
            pic:  { image: photo.urls.thumb_100 },
            hour: { text: Date2PonyHour(new Date(photo.created_at)) },
            // Sets the regular list data properties
            properties : {
                itemId: 'row' + (i + 1),
                accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE
            }
        });
    }
    return Ti.UI.createListSection({items: data});
};

listView.sections = [createPhotoData()];
listView.addEventListener('photosFetched', function(e){
    listView.setSections([createPhotoData()]); //doesnt work yet
});


predictionWindow.add(listView);

// Map Behaviour

var mapWebView = Titanium.UI.createWebView({url:'html/index.html'});
shareWindow.add(mapWebView);

// Camera Behaviour

// from the example http://docs.appcelerator.com/titanium/3.0/#!/guide/Camera_and_Photo_Gallery_APIs :
var showCam = function() {
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
        saveToPhotoGallery:true,
        allowEditing:true,
        mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
    });
};



// Settings Form

var usernameLabel = Titanium.UI.createLabel({
    color: '#821785',
    text: 'User Name',
    top: 10, left: 10,
    width: 250
});

var usernameTextField = Ti.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: 10, left: 10,
    width: 250
});

var passwordLabel = Titanium.UI.createLabel({
    color: '#821785',
    text: 'Password',
    top: 10, left: 10,
    width: 250
});

var passwordTextField = Ti.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: 10, left: 10,
    width: 250,
    passwordMask: true
});

var passwordCheckLabel = Titanium.UI.createLabel({
    color: '#821785',
    text: 'Password, again:',
    top: 10, left: 10,
    width: 250
});

var passwordCheckTextField = Ti.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: 10, left: 10,
    width: 250,
    passwordMask: true
});

var notificationsLabel = Titanium.UI.createLabel({
    color: '#821785',
    text: 'City:',
    top: 10, left: 10,
    width: 250
});

var notificationsSwitch = Ti.UI.createSwitch({
    value:true,
    top: 10, left: 10,
});

var settingsButton = Titanium.UI.createButton({
   title: 'Save',
   top: 10,
   width: 100
});

var signedUp = function() {
   return Boolean(Ti.App.Properties.getString('username'));
};
var loggedIn = function() {
    return Boolean(Ti.App.Properties.getString('sessionID'));
};

if (signedUp()) {
    usernameTextField.value = Ti.App.Properties.getString('username');
    usernameTextField.setEnabled(false); // Android only
    usernameTextField.setEditable(false);
}

settingsWindow.add(usernameLabel);
settingsWindow.add(usernameTextField);
if (!loggedIn()) {
    // We are not logged in. Add the pas
    settingsWindow.add(passwordLabel);
    settingsWindow.add(passwordTextField);
    settingsButton.setTitle('Login');
    if (!signedUp()) {
        settingsWindow.add(passwordCheckLabel);
        settingsWindow.add(passwordCheckTextField);
        settingsButton.setTitle('Sign up');
    }
}

settingsWindow.add(notificationsLabel);
settingsWindow.add(notificationsSwitch);
settingsWindow.add(settingsButton);
settingsButton.addEventListener('click',function(e) {
   if (!signedUp()) {
       createUser(usernameTextField.value, passwordTextField.value, passwordCheckTextField.value);
   }
});

//
// tabs
//

var tabGroup = Titanium.UI.createTabGroup({
    activeTabBackgroundColor: '#ed12d1',
    tabsBackgroundColor: '#821785',
});

var predictionTab = Titanium.UI.createTab({
    icon: 'KS_nav_views.png',
    title: 'Predict',
    window: predictionWindow,
});

var shareTab = Titanium.UI.createTab({
    icon: 'KS_nav_ui.png',
    title: 'Share',
    window: shareWindow,
});

// for now we add it as a tab, but it will probably be a seperate button on the top of the screen
var cameraTab = Titanium.UI.createTab({
    icon: 'KS_nav_ui.png',
    title: 'Camera',
    window: cameraWindow,
});

// it works now on ios, but if it happens to not work on Android, see:
// https://developer.appcelerator.com/question/21191/android-window-events-not-working-with-tabgroup-titanium-12
cameraTab.addEventListener("focus", showCam);

var settingsTab = Titanium.UI.createTab({
    icon: 'KS_nav_ui.png',
    title: 'Settings',
    window: settingsWindow
});

tabGroup.addTab(predictionTab);
tabGroup.addTab(shareTab);
tabGroup.addTab(cameraTab);
tabGroup.addTab(settingsTab);

// open tab group
tabGroup.open();
if (!Ti.App.Properties.getString('sessionID')) {
    tabGroup.setActiveTab(settingsTab);
}

/* This I was using to quickly show some of the Pony’s png mockup directly on the device

var win = Ti.UI.createWindow();
var image = Ti.UI.createImageView({
  image:'/ui/mock_04.png'
});
win.add(image);
win.open();

*/
