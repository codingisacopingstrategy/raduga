// Behaviour of globeWindow, The globe with the rainbows
var u = Ti.Android != undefined ? 'dp' : 0;

var image = Ti.UI.createImageView({
    image:'/ui/mock_03.png',
    width: '320dp',
    height: '480dp',
});
var container =  Titanium.UI.createView({
    width:  '100%',
    height: '100%',
    borderRadius: 0 // https://developer.appcelerator.com/question/23931/imageview-scaling-mode
});

var globe = Titanium.UI.createWebView({
    top: '20dp',
    backgroundImage: 'html/elektro_l_20140311_0530_rgb.jpg',
    url: 'html/globe.html',
    width: Ti.Platform.displayCaps.platformWidth + u,
    height: Ti.Platform.displayCaps.platformWidth + u
});

container.add(image);
globeWindow.add(globe);
