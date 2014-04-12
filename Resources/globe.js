// Behaviour of globeWindow, The globe with the rainbows
var u = Ti.Android != undefined ? 'dp' : 0;

var globe = Ti.UI.createWebView({
    top: '20dp',
    backgroundImage: 'html/elektro_l_20140311_0530_rgb_edt.jpg',
    url: 'html/globe.html',
    width: Ti.Platform.displayCaps.platformWidth + u,
    height: Ti.Platform.displayCaps.platformWidth + u
});

var predictionLabel = Ti.UI.createLabel({
    color: 'white',
    text: 'Today it is cloudy. The nearest area with a high change of rainbows 500 km, from you, near Blagodarny.',
    top: 10, left: 10, right: 10,
});

globeWindow.add(globe);
globeWindow.add(predictionLabel);
