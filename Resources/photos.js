// photosWindow behaviour

Cloud.Photos.query({
    page: 1,
    per_page: 20,
}, function (e) {
    if (e.success) {
        Ti.API.info('found on the internet ' + e.photos.length + ' photos');
        Raduga.photos = e.photos;
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
    Ti.API.info('creating photo data for ' + Raduga.photos.length + ' photos');
    var data = [];
    for (var i = 0; i < Raduga.photos.length; i++) {
        photo = Raduga.photos[i];

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

photosWindow.add(listView);
