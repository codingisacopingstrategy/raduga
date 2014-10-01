/* Utility Functions */

/* User Interface */

Raduga.UI = {};

Raduga.UI.createLabel = function(options) {
    /**
     * As Titianium doesn’t allow to set a default fontSize, we create our own method for
     * initiating labels that allows us to add default settings
     */
    if (Raduga.Platform.osname === 'android') {
        if (typeof options.font === "undefined") {
            options.font = { fontSize: "16dp" };
        }
    }
    return Ti.UI.createLabel(options);
};

Raduga.UI.createTextField = function(options) {
    /**
     * As Titianium doesn’t allow to set a default fontSize, we create our own method for
     * initiating labels that allows us to add default settings
     */
    options.font = { fontSize: "14dp" };
    options.color = 'rgb(103,103,113)';
    options.borderStyle = Ti.UI.INPUT_BORDERSTYLE_NONE;
    options.backgroundColor = 'rgb(255,255,255)';
    options.top = '10dp';
    options.height = '20dp';
    options.width = '246dp';

    return Ti.UI.createTextField(options);
};
Raduga.UI.createButton = function(titleid) {
    return Ti.UI.createButton({
        titleid: titleid,
        top: '10dp',
        width: Raduga.Platform.width * .76875,
        borderSize: '0',
        color: 'rgb(0,255,0)',
        borderRadius: '0dp',
        backgroundColor: 'rgba(0,0,0)',
        font: { fontSize: "14dp", fontWeight: "bold", },
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
    });
};

/* Date Formatting */

var zeroPad = function(n) {
    var str = String(n);
    return str.length === 1 ? '0' + str : str;
};
var Date2PonyDate = function(d) {
    return zeroPad(d.getDate()) + '.' + zeroPad(d.getMonth()) + '.' + d.getFullYear();
};

var Date2PonyHour = function(d) {
    return zeroPad(d.getHours()) + ':' + zeroPad(d.getMinutes());
};

var getMonth = function(d) {
    var months;
    if (Raduga.Platform.currentLanguage == "ru") {
        var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    } else {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }
    return months[d.getMonth()];
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
