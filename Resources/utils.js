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
