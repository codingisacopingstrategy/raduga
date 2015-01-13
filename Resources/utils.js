/*
 * Various utility functions
 */

var Platform = require('platform');

/* Date Formatting */

var zeroPad = function(n) {
    var str = String(n);
    return str.length === 1 ? '0' + str : str;
};
exports.zeroPad = zeroPad;

exports.Date2PonyDate = function(d) {
    return zeroPad(d.getDate()) + '.' + zeroPad(d.getMonth()) + '.' + d.getFullYear();
};

exports.Date2PonyHour = function(d) {
    return zeroPad(d.getHours()) + ':' + zeroPad(d.getMinutes());
};

exports.getMonth = function(d) {
    var months;
    if (Platform.currentLanguage == "ru") {
        months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    } else {
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }
    return months[d.getMonth()];
};
/* Geographical functions */

// Approximate distance in kilometers between two places in earth
// borrowed from http://www.geodatasource.com/developers/javascript
var distance = function(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var radlon1 = Math.PI * lon1/180;
    var radlon2 = Math.PI * lon2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if (typeof unit === "undefined") { unit = "K";}
    if (unit=="K") { dist = dist * 1.609344; }
    if (unit=="N") { dist = dist * 0.8684; }
    return dist;
};

// How far is a location from the location set as home
exports.distanceToHome = function(lat, lon) {
    return Math.floor(distance(parseFloat(Ti.App.Properties.getString('city_lat')), parseFloat(Ti.App.Properties.getString('city_lon')), lat, lon));
};

/* Media */

// if we know an image mime type this tells us what extension it is saved under
exports.mime2extensionDict = {
    "image/jpeg": '.jpg',
    "image/png": ".png",
    "image/tiff": ".tiff"
};
