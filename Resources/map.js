/**
 * The map view itself is implemented as a webview
 *
 *     see Resources/html/index.html
 *
 * This window provides the wrapper for the webview
 *
 * And the code needed to communicate between the webview
 * and the rest of the app.
 */

var photosutils = require('photos');
var Platform = require('platform');

//
// Global Variables
//

var rainbowCache = [];

//
// Utility functions
//

var photos2Features = function(photos) {
    /**
     * The webview uses leaflet.js. An easy way to plot elements on a leaflet
     * map is to pass them in in a format known as ‘GeoJSON’
     *
     * This utility function takes the list of geocoded photos and transforms
     * them into a GeoJSON FeatureCollection.
     */
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

        /* By default we have the latest 20 photos. This code will only plot rainbows of today:
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

//
// Set up Webview (see Resources/html/index.html)
//

var mapWebView = Ti.UI.createWebView({
    url : 'html/index.html',
    width: '100%',
    height: Platform.height,
    disableBounce: true
});

// When all necessary resources have loaded in the webview,
// We tell it to initialise the map. The map is centered on
// the city that the user has set as their location
// If no user (or location) is set, center on Moscow
mapWebView.addEventListener('load', function() {
    var city = Ti.App.Properties.getString('city_name_en') ? Ti.App.Properties.getString('city_name_en') : 'Moscow';
    Ti.API.info("Centering map on " + city);
    mapWebView.evalJS('initMap("' + city +'", ' + JSON.stringify(photos2Features(rainbowCache)) + ');');
});

//
// Set up Map Window
//

var mapWindow = Ti.UI.createWindow({
    orientationModes: [Ti.UI.PORTRAIT],
    backgroundColor: 'white',
    layout: 'vertical',
    navBarHidden: true
});

mapWindow.add(mapWebView);

//
// Export public functions
//

exports.Map = function() {
    this.window = mapWindow;
    this.updateRainbows = function(rainbows) {
        rainbowCache = rainbows;
    };
};
