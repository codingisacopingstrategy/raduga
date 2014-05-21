// Behaviour of globeWindow, The globe with the rainbows
var u = Ti.Android != undefined ? 'dp' : 0;

var globe = Ti.UI.createWebView({
    top: '20dp',
    backgroundImage: 'html/elektro_l_20140311_0530_rgb.png',
    url: 'html/globe.html',
    backgroundColor: 'transparent',
    width: Ti.Platform.displayCaps.platformWidth + u,
    height: Ti.Platform.displayCaps.platformWidth + u,
    touchEnabled: false,
    disableBounce: true
});

var predictionLabel = Ti.UI.createLabel({
    color: 'white',
    textid: 'prediction_mock',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    top: 10, left: 10, right: 10,
});

globeWindow.add(globe);
globeWindow.add(predictionLabel);
