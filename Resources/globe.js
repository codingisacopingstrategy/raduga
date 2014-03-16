// Behaviour of globeWindow, The globe with the rainbows

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
container.add(image);
globeWindow.add(container);
