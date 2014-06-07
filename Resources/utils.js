/* Utility Functions */

/* Date Formatting */

var zeroPad = function(n) {
    var str = String(n);
    return str.length === 1 ? '0' + str : str;
};
var Date2PonyDate = function(d) {
    return zeroPad(d.getDay() + 1) + '.' + zeroPad(d.getMonth()) + '.' + d.getFullYear();
};

var Date2PonyHour = function(d) {
    return zeroPad(d.getHours()) + ':' + zeroPad(d.getMinutes());
};

/* Geographical functions */

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

var distanceToHome = function(lat, lon) {
    return Math.floor(distance(parseFloat(Ti.App.Properties.getString('city_lat')), parseFloat(Ti.App.Properties.getString('city_lon')), lat, lon));
};

/* i18n */

var cityName = function() {
    /**
     * Get cityName in the right locale
     */
    var cityNameField = Raduga.Platform.currentLanguage === 'ru' ? 'city_name_ru' : 'city_name_en';
    return Ti.App.Properties.getString(cityNameField);
};

/* Error Handling */

var alertError = function(error) {
    /**
     * Titanium uses an alert box in case of error in many of it’s code examples
     * It’s a useful pattern, except that the box pops up saying ‘Alert’ whereas
     * it is more clear if it has ‘Error’ as a title.
     */
    var dialog = Ti.UI.createAlertDialog({
        message: error,
        ok: 'OK',
        title: L('error')
    }).show();
};

/* Media */

var mime2extensionDict = {
    "image/jpeg": '.jpg',
    "image/png": ".png",
    "image/tiff": ".tiff",
};
