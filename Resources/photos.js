// photosWindow behaviour

var updatePhotos = function() {
    var url = "http://vps40616.public.cloudvps.com/photos/";
    var json;

    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            // parse the retrieved data, turning it into a JavaScript object
            json = JSON.parse(this.responseText);
            var photos = json._items;
            Ti.API.info('found on the internet ' + photos.length + ' photos');
            Raduga.photos = photos;
            tableView.setData(createTableData());
            // plot the photos in the webview
            // globe.evalJS('svg.append("path").datum(' + JSON.stringify(features2Photos())  + ').attr("d", path.pointRadius(14)).attr("class", "place");');

        },
        onerror: function(error) {
            alertError('Failed loading photos through network: ' + error);
        }
    });

    xhr.open("GET", url);
    xhr.send();
};

var features2Photos = function() {
    var geoJSON = {};
    geoJSON.type = "FeatureCollection";
    geoJSON.features = [];
    for (var i = 0; i < Raduga.photos.length; i++) {
        var photo = Raduga.photos[i];

        // Skip photo’s without sufficient metadata
        if (typeof photo.custom_fields === 'undefined' || typeof photo.custom_fields.name_en === 'undefined' || typeof photo.custom_fields.name_ru === 'undefined' || typeof photo.custom_fields.coordinates === 'undefined') {
            Ti.API.info('Photo ' + photo._id + ' does not have sufficient metadata to locate on map');
            continue;
        }

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
        if (typeof photo.urls === 'undefined' || typeof photo.custom_fields === 'undefined' || typeof photo.custom_fields.name_en === 'undefined' || typeof photo.custom_fields.name_ru === 'undefined') {
            Ti.API.info('Photo ' + photo.id + ' does not have sufficient metadata to display in photo tab');
            continue;
        }

        // Titanium’s cloud service uses the "2014-02-13T14:27:39+0000" format
        // which is not recognised by the Date constructor in iOS
        // The Z is another way of saying GMT.
        photo.created_at = photo.created_at.replace('+0000','Z');

        var row = Ti.UI.createTableViewRow({
            className: 'rainbowPhoto', // used to improve table performance
            backgroundColor: 'transparent',
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
            backgroundColor: 'transparent',
            rowIndex: i, // custom property, useful for determining the row during events
            height: '0dp',
            layout:'horizontal',
            height: Ti.UI.SIZE,
        });

        var labelUserName = Ti.UI.createLabel({
            color: 'black',
            text: photo.user.username,
            width: Ti.UI.SIZE,
            right: '10dp',
            textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
            width: '310dp'
        });
        row.add(labelUserName);

        tableData.push(row);

        var row = Ti.UI.createTableViewRow({
            className: 'rainbowMeta', // used to improve table performance
            backgroundColor: 'transparent',
            rowIndex: i, // custom property, useful for determining the row during events
            height: '20dp',
            layout:'horizontal',
            height: Ti.UI.SIZE,
        });

        var labelHour = Ti.UI.createLabel({
            color: 'black',
            text: Date2PonyHour(new Date(photo.created_at)),
            width: Ti.UI.SIZE,
            left: '10dp'
        });
        row.add(labelHour);

        var labelDate = Ti.UI.createLabel({
            color: 'black',
            text: Date2PonyDate(new Date(photo.created_at)),
            width: Ti.UI.SIZE,
            left: '10dp'
        });
        row.add(labelDate);

        var labelCity = Ti.UI.createLabel({
            color: 'black',
            text: photo.custom_fields[Ti.Locale.currentLanguage === 'ru' ? 'name_ru' : 'name_en'],
            width: Ti.UI.SIZE,
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
    backgroundColor: 'transparent',
    data: createTableData()
});

photosWindow.add(tableView);
updatePhotos();
