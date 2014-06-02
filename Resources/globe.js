// Behaviour of globeWindow, The globe with the rainbows
var u = Ti.Android != undefined ? 'dp' : 0;

var globeContainer = Ti.UI.createView({
    width: Ti.Platform.displayCaps.platformWidth + u,
    height: Ti.Platform.displayCaps.platformHeight + u,
    layout: 'vertical'
});

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

var sunLine = Ti.UI.createView({
    width: '1dp',
    height: Ti.Platform.displayCaps.platformHeight + u,
    backgroundGradient: {
        type: 'linear',
        startPoint: { x: '50%', y: '0%' },
        endPoint: { x: '50%', y: '100%' },
        colors: [{ color: 'rgb(126,136,235)', offset: 0.0}, { color: 'rgb(34,205,152)', offset: 0.25 }, { color: 'rgb(238,255,139)', offset: 0.50 }, { color: 'rgb(253,199,58)', offset: 0.75 }, { color: 'rgb(255,119,121)', offset: 1.0 }],
    }
});

var rainbowLinePercentage = function() {
    var hourHash = {
        0: 3,
        1: 3.75,
        2: 4.5,
        3: 5.1,
        4: 5.6,
        5: 5.9,
        6: 6,
        7: 5.9,
        8: 5.6,
        9: 5.1,
        10: 4.5,
        11: 3.75,
        12: 3.0,
        13: 2.25,
        14: 1.5,
        15: 0.9,
        16: 0.4,
        17: 0.1,
        18: 0.0,
        19: 0.1,
        20: 0.4,
        21: 0.9,
        22: 1.5,
        23: 2.25
    };
    return parseInt(hourHash[12] / 6 * 80) + 10;
};

var updateSunLine = function() {
    var d = new Date();
    // during the day, the sunLine is above the globe:
    var above = 6 <= d.getHours() < 18;
    if (globeContainer.children.length > 0) {
        globeContainer.removeAllChildren();
    }
    sunLine.setLeft(rainbowLinePercentage());
    if (!above) {
        globeWindow.add(sunLine);
    }
    globeContainer.add(recentRainbowLabel);
    globeContainer.add(globe);
    globeContainer.add(predictionLabel);
    globeWindow.add(globeContainer);
    if (above) {
        globeWindow.add(sunLine);
    }
};

updateSunLine();

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
