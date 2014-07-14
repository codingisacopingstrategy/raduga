// photosWindow behaviour

var updatePhotos = function() {
    var url = 'http://vps40616.public.cloudvps.com/photos/?where={"processed":true}&projection={"image":0}';
    // var url = 'http://127.0.0.1:5000/photos/?where={"processed":true}&projection={"image":0}';
    var json;

    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            // parse the retrieved data, turning it into a JavaScript object
            json = JSON.parse(this.responseText);
            var photos = json._items;
            Ti.API.info('found on the internet ' + photos.length + ' photos');
            Raduga.photos = photos;
            // fill the photo-tab
            tableView.setData(createTableData());
            // plot the photos in the webview
            // globe.evalJS('svg.append("path").datum(' + JSON.stringify(features2Photos())  + ').attr("d", path.pointRadius(14)).attr("class", "place");');
            // display most recent rainbow in globe tab
            if (Raduga.photos.length === 0) {
                recentRainbowLabel.setText('');
                return null;
            }
            var photo = Raduga.photos[0];
            var latestRainbowDate = new Date(photo.created_at);
            var spottedMessage = String.format(L('rainbow_spotted_alt'),
                photo.custom_fields[Raduga.Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en'],
                distanceToHome(photo.custom_fields.coordinates[0][1], photo.custom_fields.coordinates[0][0]));
            var dateMessage = latestRainbowDate.getDay() + 1 + ' ' + getMonth(latestRainbowDate) + ' ' + Date2PonyHour(latestRainbowDate);
            recentRainbowLabel.setText(spottedMessage + '\n' + dateMessage);
        },
        onerror: function(error) {
            alertError('Failed loading photos through network: ' + JSON.stringify(error));
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

        var name = photo.custom_fields[Raduga.Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en'];
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

    var row = Ti.UI.createTableViewRow({
        className: 'separator', // used to improve table performance
        backgroundColor: 'transparent',
        rowIndex: -1, // custom property, useful for determining the row during events
        height: '20dp'
    });

    tableData.push(row);

    for (var i = 0; i < Raduga.photos.length; i++) {
        var photo = Raduga.photos[i];

        // Skip photo’s without sufficient metadata
        if (typeof photo.user === 'undefined' || typeof photo.urls === 'undefined' || typeof photo.custom_fields === 'undefined' || typeof photo.custom_fields.name_en === 'undefined' || typeof photo.custom_fields.name_ru === 'undefined') {
            Ti.API.info('Photo ' + photo._id + ' does not have sufficient metadata to display in photo tab');
            continue;
        } else {
            Ti.API.info('Showing photo ' + photo._id);
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

        var labelCity = Ti.UI.createLabel({
            color: 'white',
            text: photo.custom_fields[Raduga.Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en'],
            width: Ti.UI.SIZE,
            top: '2dp',
            left: '10dp'
        });
        row.add(labelCity);

        var labelUserAndDate = Ti.UI.createLabel({
            color: 'white',
            text: photo.user.username + " " + Date2PonyDate(new Date(photo.created_at)) + " — " + Date2PonyHour(new Date(photo.created_at)),
            width: Ti.UI.SIZE,
            top: '26dp',
            left: '10dp'
        });
        row.add(labelUserAndDate);

        var photoShareButton = Ti.UI.createImageView({
            image: 'ui/icons/share.png',
            width: '19dp',
            height: '26dp',
            bottom: '10dp',
            left: '10dp'
        });
        row.add(photoShareButton);

        if(Raduga.Platform.ios) {
            row.setSelectionStyle(Ti.UI.iPhone.TableViewCellSelectionStyle.NONE);
        }

        tableData.push(row);

        var row = Ti.UI.createTableViewRow({
            className: 'separator', // used to improve table performance
            backgroundColor: 'transparent',
            rowIndex: -1, // custom property, useful for determining the row during events
            height: '2dp'
        });

        tableData.push(row);


    }
    return tableData;
};

var tableView = Ti.UI.createTableView({
    top: '0dp',
    minRowHeight: '0dp',
    separatorColor: 'transparent',
    backgroundColor: 'transparent',
    data: createTableData()
});

tableView.addEventListener("click", function(e){
    Ti.API.info("click registerd on share button");
    var photo = Raduga.photos[e.row.rowIndex];
    var city = photo.custom_fields[Raduga.Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en'];
    var username = photo.user.username;

    if(Raduga.Platform.ios && Social.isActivityViewSupported()){
        Ti.API.info("Social activity registered");
        Social.activityView({
            text: String.format(L('photo_caption'), username, city),
            image: photo.urls.original,
        });
    } else {
        //implement sharing Android
    }
});


if (Raduga.Platform.ios) {
    tableView.setSeparatorStyle(Ti.UI.iPhone.TableViewSeparatorStyle.NONE);
}

photosWindow.add(tableView);
