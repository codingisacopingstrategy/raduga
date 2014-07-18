var mapWebView = Ti.UI.createWebView({
    url : 'html/index.html',
    width: '100%',
    width: Raduga.Platform.width,
    height: Raduga.Platform.height,
    disableBounce: true
});

mapWebView.addEventListener('load', function() {
    // If someone clicks on the map before they set up their location; center on Moscow
    var city = Ti.App.Properties.getString('city_name_en') ? Ti.App.Properties.getString('city_name_en') : 'Moscow';
    Ti.API.info("Centering map on " + city);
    mapWebView.evalJS('initMap("' + city +'", ' + JSON.stringify(photos2Features()) + ');');
});

mapWindow.add(mapWebView);
