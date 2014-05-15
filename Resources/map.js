var mapWebView = Ti.UI.createWebView({url:'html/index.html'});

mapWebView.addEventListener('load', function() {
    // If someon clicks on the map before they set up their location; center on Moscow
    var city = Ti.App.Properties.getString('city_name_en') ? Ti.App.Properties.getString('city_name_en') : 'Moscow';
    Ti.API.info("Centering map on " + city);
    mapWebView.evalJS('initMap("' + city +'");');
});

mapWindow.add(mapWebView);
