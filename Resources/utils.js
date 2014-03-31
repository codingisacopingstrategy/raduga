/* Utility Functions */

var zeroPad = function(n) {
    var str = String(n);
    return str.length === 1 ? '0' + str : str;
};
var Date2PonyDate = function(d) {
    return zeroPad(d.getDay()) + '.' + zeroPad(d.getMonth()) + '.' + d.getFullYear();
};

var Date2PonyHour = function(d) {
    return zeroPad(d.getHours()) + ':' + zeroPad(d.getMinutes());
};

var cityName = function() {
    /**
     * Get cityName in the right locale
     */
    var cityNameField = Titanium.Locale.currentLanguage === 'ru' ? 'city_name_ru' : 'city_name_en';
    return Ti.App.Properties.getString(cityNameField);
};


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
