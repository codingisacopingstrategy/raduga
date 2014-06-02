// Behaviour of globeWindow, The globe with the rainbows
var u = Ti.Android != undefined ? 'dp' : 0;

var recentRainbowLabel = Ti.UI.createLabel({
    color: currentColour(),
    text: '',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    top: '20dp', left: '10dp', right: '10dp',
});

var globe = Ti.UI.createWebView({
    top: '10dp',
    backgroundImage: 'html/elektro_l_20140311_0530_rgb.png',
    url: 'html/globe.html',
    backgroundColor: 'transparent',
    width: Ti.Platform.displayCaps.platformWidth * .8 + u,
    height: Ti.Platform.displayCaps.platformWidth * .8 + u,
    touchEnabled: false,
    disableBounce: true
});

var predictionLabel = Ti.UI.createLabel({
    text: '',
    color: currentColour(),
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    top: '10dp', left: '10dp', right: '10dp',
});

globeWindow.add(recentRainbowLabel);
globeWindow.add(globe);
globeWindow.add(predictionLabel);

var rainbowCities;

// Check if we are in an area with heightened rainbow chance and update the display accordingly

var updateRainbowCities = function() {
    var url = "http://vps40616.public.cloudvps.com/latest/rainbow_cities.json";

    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            var json = JSON.parse(this.responseText);
            rainbowCities = json;
            Ti.API.info('found on the internet ' + rainbowCities.length + ' cities with heightened chance of rainbows');

            for (var i = 0; i < rainbowCities.length; i++) {
                if (rainbowCities[i].name_en === Ti.App.Properties.getString('city_name_en')) {
                // we are in rainbow area!
                    if (new Date().getHours() < 12) {
                        predictionLabel.setText(L('rainbow_predicted_morning'));
                    } else {
                        predictionLabel.setText(L('rainbow_predicted_afternoon'));
                    }
                    break;
                }
            }

        },
        onerror: function(error) {
            alertError('Failed loading rainbow cities through network: ' + JSON.stringify(error));
        }
    });
    xhr.open("GET", url);
    xhr.send();
};

updateRainbowCities();
