var u = Ti.Android != undefined ? 'dp' : 0;

var mapWebView = Ti.UI.createWebView({
    url : 'html/index.html',
    width: '100%',
    width: Ti.Platform.displayCaps.platformWidth + u,
    height: Ti.Platform.displayCaps.platformHeight + u,
    disableBounce: true
});

mapWebView.addEventListener('load', function() {
    // If someone clicks on the map before they set up their location; center on Moscow
    var city = Ti.App.Properties.getString('city_name_en') ? Ti.App.Properties.getString('city_name_en') : 'Moscow';
    Ti.API.info("Centering map on " + city);
    mapWebView.evalJS('initMap("' + city +'");');
});

mapWindow.add(mapWebView);
