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
