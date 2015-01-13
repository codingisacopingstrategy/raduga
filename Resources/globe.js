/**
 * The globe view: the first view a (logged-in) user sees
 *
 * It shows an image of the globe, beatiful imagery courtesy of
 * the Elektro L satelitte
 *
 * A text above the globe mentions the last spotted rainbow,
 * text below mentions predicted rainbow zones
 */

var UI = require('ui');
var Platform = require('platform');
var utils = require('utils');
var gradients = require('gradients');
var users = require('users');

//
// User interface
//

var globeWindow = Ti.UI.createWindow({
    orientationModes: [Ti.UI.PORTRAIT],
    backgroundColor: 'white',
    navBarHidden: true
});

var globeContainer = Ti.UI.createView({
    width: Platform.width,
    height: Platform.height
});

// The text above the globe, mentioning the most recent rainbow spotted (photo uploaded)
var recentRainbowLabel = UI.createLabel({
    color: gradients.currentColour(),
    text: '',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    top: Platform.android ? '52dp' : '22dp', left: '10dp', right: '10dp' // On Android, we need to make space for the tab bar which is on top
});

// The image of the globe, as downloaded from Elektro L
var globe = Ti.UI.createImageView({
    top: Platform.android ? '122dp' : '92dp',
    defaultImage: 'ui/transparant_pixel.png',
    image: 'html/elektro_l_20140311_0530_rgb.png',
    backgroundColor: 'transparent',
    width: Platform.width * 0.8,
    height: Platform.width * 0.8,
    touchEnabled: false,
    disableBounce: true
});

// The text underneath the globe, shows nearest three cities in which rainbows are predicted
var predictionLabel = UI.createLabel({
    top: (Platform.android ? 122 : 92 ) + Platform.width * 0.8 + 10,
    color: gradients.currentColour(),
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    left: '10dp', right: '10dp'
});

// a line (filled with a rainbow gradient) in front of (or behind) the globe,
// showing the approxomative position of the sun
var sunLine = Ti.UI.createView({
    width: '1dp',
    height:  Platform.height,
    backgroundGradient: {
        type: 'linear',
        startPoint: { x: '50%', y: '0%' },
        endPoint: { x: '50%', y: '100%' },
        colors: [{ color: 'rgb(126,136,235)', offset: 0.0}, { color: 'rgb(34,205,152)', offset: 0.25 }, { color: 'rgb(238,255,139)', offset: 0.50 }, { color: 'rgb(253,199,58)', offset: 0.75 }, { color: 'rgb(255,119,121)', offset: 1.0 }]
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
    return (parseInt(hourHash[n] / 6 * 78, 10) + 11) + "%";
};

globeContainer.add(recentRainbowLabel);
globeContainer.add(globe);
globeContainer.add(predictionLabel);
globeWindow.add(globeContainer);
globeWindow.add(sunLine);

//
// Update interface
//

var updateSunLine = function() {
    sunLine.setLeft(rainbowLinePercentage());
};

// Check if we are in an area with heightened rainbow chance and update the display accordingly
var updateElektroL = function() {
    var d = new Date();
    d.setSeconds(0);
    d.setMilliseconds(0);
    if (d.getMinutes() > 30) { d.setMinutes(30); } else { d.setMinutes(0); }
    var elektro_slug = '13' + utils.zeroPad(d.getUTCMonth()) + utils.zeroPad(d.getUTCDate()) + '_' + utils.zeroPad(d.getUTCHours()) + utils.zeroPad(d.getUTCMinutes());
    var elektro_url = 'http://vps40616.public.cloudvps.com/static/elektro/' + elektro_slug + '_RGB.png';

    if (globe.getImage() !== elektro_url) {
        Ti.API.info("loading Elektro L " + elektro_url);
        globe.setImage(elektro_url);
    }
};

// mention the most recent spotted rainbow in a message above the globe
var updateSpottedMessage = function(rainbows) {
    if (rainbows.length === 0) {
        globe.setRecentRainbowText('');
        return null;
    }
    var rainbow = rainbows[0];
    var spottedMessage;
    var latestRainbowDate = new Date(rainbow.created_at);
    if (users.loggedIn()) {
        spottedMessage = String.format(L('rainbow_spotted_alt'),
            rainbow.custom_fields[Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en'],
            utils.distanceToHome(rainbow.custom_fields.coordinates[0][1], rainbow.custom_fields.coordinates[0][0]));
    } else {
        spottedMessage = String.format(L('rainbow_spotted_no_from_you'),
        rainbow.custom_fields[Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en']);
    }
    var dateMessage = latestRainbowDate.getDate() + ' ' + utils.getMonth(latestRainbowDate) + ' ' + utils.Date2PonyHour(latestRainbowDate);
    var totalSpottedMessage = spottedMessage + '\n' + dateMessage;
    Ti.API.info('spottedMessage: ' + totalSpottedMessage);
    recentRainbowLabel.setText(totalSpottedMessage);
};

// Mention the 3 nearest cities with rainbows predicted
// This information is also made available to other parts of the app
var rainbowCities;
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

            rainbowCities = rainbowCities.map(function(city) {
                city.distance = utils.distanceToHome(city.lat, city.lon);
                return city;
            });

            rainbowCities.sort(function(a,b) {
                if (a.distance < b.distance) {
                    return -1; }
                if (a.distance > b.distance) {
                    return 1; }
                return 0;
            });

            rainbowCities = rainbowCities.slice(0,3);

            var cityNames = rainbowCities.map(function (city) {
                return Platform.currentLanguage === 'ru' ? city.name_ru : city.name_en;
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
            if (Ti.Network.getNetworkTypeName() === "NONE" || error.code === -1009 || error.code === -1003 || error.code === -1004 || error.code === -1001) {
                /** If the telephone is not connected to the internet, this is not actually an error */
               /** btw, error -1004 is when there is network but it can’t find the internet
                * -1009 is when there is no internet connection (is supposed to be found by getNetworkTypeName, but apparently not always)                 * -1003 is when a server with this hostname could not be found                 * -1001 is when the server times out (probably a connection problem as well) */
                Ti.API.info("tried to request rainbow cities while not connected to the internet");
                return;
            }
            UI.alertError('Failed loading rainbow cities through network: ' + JSON.stringify(error));
        }
    });
    xhr.open("GET", url);
    xhr.send();
};

//
// Public exports
//

exports.Globe = function() {
    this.window = globeWindow;
    this.updateColours = function() {
        globeWindow.setBackgroundGradient(gradients.currentGradient());
        predictionLabel.setColor(gradients.currentColour());
        recentRainbowLabel.setColor(gradients.currentColour());
    };
    this.update = function() {
        updateElektroL();
        updateSunLine();
        updateRainbowCities();
    };
    this.error = function() {
        Ti.API.info('set offline globe view');
        globe.setImage('html/elektro_l_130502_0030_10.png'); // globe error image
        predictionLabel.setText(L('no_internet'));
    };
    this.updateRainbows = updateSpottedMessage;
    this.updateColours();
    updateSunLine();
};
