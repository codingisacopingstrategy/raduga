var Cloud = require('ti.cloud');

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


// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup({
    activeTabBackgroundColor: '#ed12d1',
    tabsBackgroundColor: '#821785',
});


Cloud.Photos.query({
    page: 1,
    per_page: 20,
}, function (e) {
    if (e.success) {
        alert('found on the internet ' + e.photos.length + ' photos');
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
            bindId: 'rowtitle',  // Bind ID for this label
            properties: {        // Sets the Label.left property
                left: '10dp'
            }
        },
        {
            type: 'Ti.UI.ImageView',  // Use an image view
            bindId: 'pic',            // Bind ID for this image view
            properties: {             // Sets the ImageView.image property
                image: 'KS_nav_ui.png'
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
    alert('creating photo data for ' + app.models.photos.length + ' photos');
    var data = [];
    for (var i = 0; i < app.models.photos.length; i++) {
        data.push({
            // Maps to the rowtitle component in the template
            // Sets the text property of the Label component
            rowtitle : { text: 'Row ' + (i + 1) },
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

//
// create base UI tab and root window
//
var predictionWindow = Titanium.UI.createWindow({
    title: 'Wall',
    backgroundColor: '#000'
});

var predictionTab = Titanium.UI.createTab({
    icon: 'KS_nav_views.png',
    title: 'Predict',
    window: predictionWindow,
});

var predictionLabel = Titanium.UI.createLabel({
    color: '#821785',
    text: 'Prediction Window',
    font: {
        fontSize: 20,
    },
    textAlign: 'center',
    width: 'auto',
});

predictionWindow.add(listView);

//
// create controls tab and root window
//
var shareWindow = Titanium.UI.createWindow({
    title: 'Tab 2',
    backgroundColor: '#000'
});
var shareTab = Titanium.UI.createTab({
    icon: 'KS_nav_ui.png',
    title: 'Share',
    window: shareWindow,
});

var mapWebView = Titanium.UI.createWebView({url:'html/index.html'});
shareWindow.add(mapWebView);

// from the example http://docs.appcelerator.com/titanium/3.0/#!/guide/Camera_and_Photo_Gallery_APIs :
var showCam = function() {
    Titanium.Media.showCamera({
        success:function(event) {
            // called when media returned from the camera
            Ti.API.debug('Our type was: '+event.mediaType);
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

var cameraWindow = Titanium.UI.createWindow({
    title: 'Camera',
    backgroundColor: '#000'
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

//  add tabs
tabGroup.addTab(predictionTab);
tabGroup.addTab(shareTab);
tabGroup.addTab(cameraTab);

// open tab group
tabGroup.open();
