// photosWindow behaviour

var updatePhotos = function() {
    Cloud.Photos.query({
        page: 1,
        per_page: 20,
    }, function (e) {
        if (e.success) {
            Ti.API.info('found on the internet ' + e.photos.length + ' photos');
            Raduga.photos = e.photos;
            tableView.setData(createTableData());
            // plot the photos in the webview
            globe.evalJS('svg.append("path").datum(' + JSON.stringify(features2Photos())  + ').attr("d", path).attr("class", "place");');

        } else {
            alertError((e.error && e.message) || JSON.stringify(e));
        }
    });
};

var features2Photos = function() {
    var geoJSON = {};
    geoJSON.type = "FeatureCollection";
    geoJSON.features = [];
    for (var i = 0; i < Raduga.photos.length; i++) {
        var photo = Raduga.photos[i];
        var name = photo.custom_fields[Ti.Locale.currentLanguage === 'ru' ? 'name_ru' : 'name_en'];
        var lon  = photo.custom_fields.coordinates[0][0];
        var lat  = photo.custom_fields.coordinates[0][1];
        var feature = {
            type: "Feature",
            properties: {
                name: name,
            },
            geometry: {
                type: "Point",
                coordinates: [
                    lon, lat
                ]
            }
        };
        geoJSON.features.push(feature);
    }
    return geoJSON;
};

var createTableData = function() {
    var tableData = [];

    for (var i = 0; i < Raduga.photos.length; i++) {
        var photo = Raduga.photos[i];

        // Skip photo’s without sufficient metadata
        if (typeof photo.custom_fields === 'undefined' || typeof photo.custom_fields.name_en === 'undefined' || typeof photo.custom_fields.name_ru === 'undefined') {
            Ti.API.info('Photo ' + photo.id + ' does not have sufficient metadata');
            continue;
        }

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

        var rainbowImage = Ti.UI.createImageView({
            image: photo.urls.medium_640,
            left: 0,
            top: 0,
            width: '320dp'
        });
        row.add(rainbowImage);

        tableData.push(row);

        var row = Ti.UI.createTableViewRow({
            className: 'rainbowUsername', // used to improve table performance
            backgroundColor: 'black',
            // selectedBackgroundColor: 'black',
            rowIndex: i, // custom property, useful for determining the row during events
            height: '0dp',
            layout:'horizontal',
            height: Titanium.UI.SIZE,
        });

        var labelUserName = Ti.UI.createLabel({
            color: 'white',
            text: photo.user.username,
            width: Titanium.UI.SIZE,
            right: '10dp',
            textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
            width: '310dp'
        });
        row.add(labelUserName);

        tableData.push(row);

        var row = Ti.UI.createTableViewRow({
            className: 'rainbowMeta', // used to improve table performance
            backgroundColor: 'black',
            // selectedBackgroundColor: 'black',
            rowIndex: i, // custom property, useful for determining the row during events
            height: '20dp',
            layout:'horizontal',
            height: Titanium.UI.SIZE,
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

        var labelCity = Ti.UI.createLabel({
            color: 'white',
            text: photo.custom_fields[Ti.Locale.currentLanguage === 'ru' ? 'name_ru' : 'name_en'],
            width: Titanium.UI.SIZE,
            left: '10dp'
        });
        row.add(labelCity);

        tableData.push(row);




    }
    return tableData;
};

var tableView = Ti.UI.createTableView({
    minRowHeight: '20dp',
    separatorColor: 'transparent',
    backgroundColor: 'black',
    data: createTableData()
});

photosWindow.add(tableView);
updatePhotos();
