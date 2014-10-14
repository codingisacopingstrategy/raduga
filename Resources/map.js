var photosutils = require('photos');
var Platform = require('platform');

var rainbowCache = [];

var mapWindow = Ti.UI.createWindow({
    orientationModes: [Ti.UI.PORTRAIT],
    backgroundColor: 'white',
    layout: 'vertical',
    navBarHidden: true
});

/* Map Window */

var mapWebView = Ti.UI.createWebView({
    url : 'html/index.html',
    width: '100%',
    height: Platform.height,
    disableBounce: true
});

mapWebView.addEventListener('load', function() {
    // If someone clicks on the map before they set up their location; center on Moscow
    var city = Ti.App.Properties.getString('city_name_en') ? Ti.App.Properties.getString('city_name_en') : 'Moscow';
    Ti.API.info("Centering map on " + city);
    mapWebView.evalJS('initMap("' + city +'", ' + JSON.stringify(photos2Features(rainbowCache)) + ');');
});

mapWindow.add(mapWebView);

var photos2Features = function(photos) {
    var geoJSON = {};
    geoJSON.type = "FeatureCollection";
    geoJSON.features = [];

    console.log("trying to add " + photos.length + " photos as features");
    for (var i = 0; i < photos.length; i++) {
        var photo = photos[i];

        // Skip photo’s without sufficient metadata
        if (photosutils.insufficientMetadata(photo)) {
            Ti.API.info('Photo ' + photo._id + ' does not have sufficient metadata to locate on map');
            continue;
        }

        /* This code will only plot rainbows of today:
        if (new Date(photo.created_at).toDateString() !== new Date().toDateString()) {
            Ti.API.info('Photo ' + photo._id + ' is not of today, and does not warrant a marker on the map');
            continue;
        } */

        var name = photo.custom_fields[Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en'];
        var lon  = photo.custom_fields.coordinates[0][0];
        var lat  = photo.custom_fields.coordinates[0][1];
        var feature = {
            type: "Feature",
            properties: {
                name: name,
                index: i,
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

exports.Map = function() {
    this.window = mapWindow;
    this.updateRainbows = function(rainbows) {
        rainbowCache = rainbows;
    };
};
