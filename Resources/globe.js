// Behaviour of globeWindow, The globe with the rainbows
var u = Ti.Android != undefined ? 'dp' : 0;

var globeContainer = Ti.UI.createView({
    width: Raduga.Platform.width,
    height: Raduga.Platform.height,
    layout: 'vertical'
});

var recentRainbowLabel = Raduga.UI.createLabel({
    color: currentColour(),
    text: '',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    top: Raduga.Platform.android ? '52dp' : '22dp', left: '10dp', right: '10dp', // On Android, we need to make space for the tab bar which is on top
});

var globe = Ti.UI.createImageView({
    top: '10dp',
    defaultImage: 'ui/transparant_pixel.png',
    image: 'html/elektro_l_20140311_0530_rgb.png',
    backgroundColor: 'transparent',
    width: Raduga.Platform.width * .8,
    height: Raduga.Platform.width * .8,
    touchEnabled: false,
    disableBounce: true
});

var predictionLabel = Raduga.UI.createLabel({
    text: '',
    color: currentColour(),
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    top: '10dp', left: '10dp', right: '10dp',
});

var sunLine = Ti.UI.createView({
    width: '1dp',
    height:  Raduga.Platform.height,
    backgroundGradient: {
        type: 'linear',
        startPoint: { x: '50%', y: '0%' },
        endPoint: { x: '50%', y: '100%' },
        colors: [{ color: 'rgb(126,136,235)', offset: 0.0}, { color: 'rgb(34,205,152)', offset: 0.25 }, { color: 'rgb(238,255,139)', offset: 0.50 }, { color: 'rgb(253,199,58)', offset: 0.75 }, { color: 'rgb(255,119,121)', offset: 1.0 }],
    }
});

var rainbowLinePercentage = function(n) {
    /**
     * At 6 in the morning, the sun is completely in the east of the globe: at 79% of the total screen width
     * At 18 in the evening, completely in the west: at 11% of the total screen width
     */
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
    if (typeof n === "undefined") { n = new Date().getHours(); }
    return (parseInt(hourHash[n] / 6 * 78) + 11) + "%";
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

var updateElektroL = function() {
    var d = new Date();
    d.setSeconds(0);
    d.setMilliseconds(0);
    if (d.getMinutes() > 30) { d.setMinutes(30); } else { d.setMinutes(0); }
    var elektro_slug = '13' + zeroPad(d.getUTCMonth()) + zeroPad(d.getUTCDate()) + '_' + zeroPad(d.getUTCHours()) + zeroPad(d.getUTCMinutes());
    var elektro_url = 'http://vps40616.public.cloudvps.com/static/elektro/' + elektro_slug + '_RGB.png';

    if (globe.getImage() !== elektro_url) {
        /*var newGlobeImage = Ti.UI.createImageView(elektro_url);
        Ti.API.info("the image will be replaced by " + elektro_url + ", started to load");
        newGlobeImage.addEventListener('load', function(e) {
            Ti.API.info(elektro_url + " has now loaded, replacing old image");
            globeWindow.remove(globe);
            globeWindow.add(newGlobeImage);
            globe = newGlobeImage;
        });*/
        Ti.API.info("loading Elektro L " + elektro_url);
        globe.setImage(elektro_url);
    }
};

var updateRainbowCities = function() {
    var url = "http://vps40616.public.cloudvps.com/latest/rainbow_cities.json";

    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            predictionLabel.setText('');

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
                    return true; // we don’t want to go on setting the rainbow cities—this is more important!
                }
            }

            ////////////////////////////////////////////////////////////////
            // display three closest rainbow-predicted areas underneath ////
            ////////////////////////////////////////////////////////////////

            Raduga.rainbowCities = rainbowCities.map(function(city) {
                city.distance = distanceToHome(city.lat, city.lon);
                return city;
            });

            Raduga.rainbowCities.sort(function(a,b) {
                if (a.distance < b.distance)
                    return -1;
                if (a.distance > b.distance)
                    return 1;
                return 0;
            });

            Raduga.rainbowCities = Raduga.rainbowCities.slice(0,3);

            var cityNames = Raduga.rainbowCities.map(function (city) {
                return Raduga.Platform.currentLanguage === 'ru' ? city.name_ru : city.name_en;
            });
            if (cityNames.length === 3) {
                predictionLabel.setText(String.format(L('prediction'), cityNames[0], cityNames[1], cityNames[2]));
            }
            if (cityNames.length === 2) {
                predictionLabel.setText(String.format(L('prediction_two'), cityNames[0], cityNames[1]));
            }
            if (cityNames.length === 1) {
                predictionLabel.setText(String.format(L('prediction_one'), cityNames[0]));
            }
        },
        onerror: function(error) {
            if (Ti.Network.getNetworkTypeName() === "NONE") {
                /** If the telephone is not connected to the internet, this is not actually an error */
                Ti.API.info("tried to request rainbow cities while not connected to the internet");
                return;
            }
            alertError('Failed loading rainbow cities through network: ' + JSON.stringify(error));
        }
    });
    xhr.open("GET", url);
    xhr.send();
};
