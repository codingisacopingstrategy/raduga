// photosWindow behaviour

Cloud.Photos.query({
    page: 1,
    per_page: 20,
}, function (e) {
    if (e.success) {
        Ti.API.info('found on the internet ' + e.photos.length + ' photos');
        Raduga.photos = e.photos;
        tableView.setData(createTableData());
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});

var createTableData = function() {
    var tableData = [];

    for (var i = 0; i < Raduga.photos.length; i++) {
        var photo = Raduga.photos[i];

        // Titanium’s cloud service uses the "2014-02-13T14:27:39+0000" format
        // which is not recognised by the Date constructor in iOS
        // The Z is another way of saying GMT.
        photo.created_at = photo.created_at.replace('+0000','Z');

        var row = Ti.UI.createTableViewRow({
            className: 'rainbowPhoto', // used to improve table performance
            backgroundColor: 'black',
            // selectedBackgroundColor: 'white',
            rowIndex: i, // custom property, useful for determining the row during events
        });

        var imageAvatar = Ti.UI.createImageView({
            image: photo.urls.medium_640,
            left: 0,
            top: 0,
            width: '320dp'
        });
        row.add(imageAvatar);

        tableData.push(row);

        var row = Ti.UI.createTableViewRow({
            className: 'rainbowMeta', // used to improve table performance
            backgroundColor: 'black',
            // selectedBackgroundColor: 'black',
            rowIndex: i, // custom property, useful for determining the row during events
            height: '20dp',
            layout:'horizontal'
        });

        var labelHour = Ti.UI.createLabel({
            color: 'white',
            text: Date2PonyHour(new Date(photo.created_at)),
            width: Titanium.UI.SIZE,
            left: '10dp'
        });
        row.add(labelHour);

        var labelDate = Ti.UI.createLabel({
            color: 'white',
            text: Date2PonyDate(new Date(photo.created_at)),
            width: Titanium.UI.SIZE,
            left: '10dp'
        });
        row.add(labelDate);

        var labelUserName = Ti.UI.createLabel({
            color: 'white',
            text: photo.user.username,
            width: Titanium.UI.SIZE,
            left: '10dp'

        });
        row.add(labelUserName);

        tableData.push(row);
    }
    return tableData;
};

var tableView = Ti.UI.createTableView({
    backgroundColor: 'white',
    data: createTableData()
});

photosWindow.add(tableView);
