var zeroPad = require('utils').zeroPad;

var currentColour = function(slug) {
    if (typeof slug === "undefined") {
        slug = gradientSlug();
    }
    // "05:30" -> 5
    var hour = parseInt(slug.split(":")[0], 10);
    if (0 <= hour && hour < 7) { return 'rgb(196,201,211)'; }
    if (7 <= hour && hour < 12) { return 'rgb(104,102,113)'; }
    if (12 <= hour && hour < 17) { return 'rgb(103,103,113)'; }
    if (17 <= hour && hour < 24) { return 'rgb(196,201,211)'; }
};

var gradientSlug = function() {
    /**
     * Rounds current time to half hour and prints it this way: "11:30"
     */
    var d = new Date(); d.setSeconds(0); d.setMilliseconds(0);
    if (d.getMinutes() > 30) { d.setMinutes(30); } else { d.setMinutes(0); }
    return zeroPad(d.getHours()) + ':' + zeroPad(d.getMinutes());
};

var i2GradientSlug = function(i) {
    /**
    * Take an int and produce a slug like "00:30"
    * incrementing with 30 minutes for each i
    */
    var i = i % 48;
    var hours = Math.floor(i/2);
    var minutes = i % 2 * 30;
    return zeroPad(hours) + ':' + zeroPad(minutes);
};

var currentGradient = function(slug) {
    if (typeof slug === "undefined") {
        slug = gradientSlug();
    }
    return {
        type: 'linear',
        startPoint: { x: '50%', y: '100%' },
        endPoint: { x: '50%', y: '0%' },
        colors: gradientStops[slug]
    };
};

var currentSettingsGradient = currentGradient;

var gradientStops ={
    "00:00" : [{ color: 'rgb(54,0,26)', offset: 0.0}, { color: 'rgb(31,0,73)', offset: 0.23 }, { color: 'rgb(0,0,0)', offset: 1.0 }],
    "00:30" : [{ color: 'rgb(54,0,26)', offset: 0.0}, { color: 'rgb(31,0,73)', offset: 0.23 }, { color: 'rgb(0,0,98)', offset: 0.52 }, { color: 'rgb(0,0,0)', offset: 1.0 }],
    "01:00" : [{ color: 'rgb(67,16,88)', offset: 0.0}, { color: 'rgb(0,88,111)', offset: 0.40 }, { color: 'rgb(36,0,44)', offset: 1.0 }],
    "01:30" : [{ color: 'rgb(0,88,111)', offset: 0.0}, { color: 'rgb(0,0,44)', offset: 1.0 }],
    "02:00" : [{ color: 'rgb(67,16,88)', offset: 0.0}, { color: 'rgb(0,88,111)', offset: 0.20 }, { color: 'rgb(0,0,44)', offset: 1.0 }],
    "02:30" : [{ color: 'rgb(67,16,88)', offset: 0.0}, { color: 'rgb(0,93,111)', offset: 0.70 }, { color: 'rgb(0,0,44)', offset: 1.0 }],
    "03:00" : [{ color: 'rgb(0,88,157)', offset: 0.0 }, { color: 'rgb(79,128,120)', offset: 0.32 }, { color: 'rgb(0,0,44)', offset: 0.98 }],
    "03:30" : [{ color: 'rgb(67,16,88)', offset: 0.0 }, { color: 'rgb(0,88,157)', offset: 0.20 }, { color: 'rgb(79,128,120)', offset: 0.47 }, { color: 'rgb(0,0,44)', offset: 0.98 }],
    "04:00" : [{ color: 'rgb(0,88,157)', offset: 0.05 }, { color: 'rgb(79,128,120)', offset: 0.57 }, { color: 'rgb(0,0,44)', offset: 0.98 }],
    "04:30" : [{ color: 'rgb(67,16,88)', offset: 0.0}, { color: 'rgb(104,174,135)', offset: 0.43 }, { color: 'rgb(28,31,90)', offset: 0.98 }],
    "05:00" : [{ color: 'rgb(119,16,98)', offset: 0.0}, { color: 'rgb(104,174,135)', offset: 0.30 }, { color: 'rgb(28,31,90)', offset: 0.98}],
    "05:30" : [{ color: 'rgb(157,106,98)', offset: 0.0}, { color: 'rgb(104,174,157)', offset: 0.45 }, { color: 'rgb(28,31,90)', offset: 0.97 }],
    "06:00" : [{ color: 'rgb(116,170,155)', offset: 0.0}, { color: 'rgb(96,88,113)', offset: 0.45 }],
    "06:30" : [{ color: 'rgb(219,142,139)', offset: 0.0}, { color: 'rgb(116,170,155)', offset: 0.68 }, { color: 'rgb(95,88,113)', offset: 1.0 }],
    "07:00" : [{ color: 'rgb(219,193,183)', offset: 0.18}, { color: 'rgb(116,170,155)', offset: 0.55 }],
    "07:30" : [{ color: 'rgb(219,193,183)', offset: 0.18}, { color: 'rgb(116,170,155)', offset: 0.63 }, { color: 'rgb(108,216,234)', offset: 0.98 }],
    "08:00" : [{ color: 'rgb(219,193,183)', offset: 0.18}, { color: 'rgb(69,255,249)', offset: 0.75 }, { color: 'rgb(69,201,234)', offset: 1.0 }],
    "08:30" : [{ color: 'rgb(219,193,183)', offset: 0.18}, { color: 'rgb(96,255,249)', offset: 0.97 }],
    "09:00" : [{ color: 'rgb(252,178,139)', offset: 0.0 }, { color: 'rgb(139,255,250)', offset: 0.7 }, { color: 'rgb(198,255,250)', offset: 0.96 }],
    "09:30" : [{ color: 'rgb(252,178,139)', offset: 0.0 }, { color: 'rgb(139,255,250)', offset: 1.0 }],
    "10:00" : [{ color: 'rgb(178,255,247)', offset: 0.0 }, { color: 'rgb(213,232,219)', offset: 0.72 }, { color: 'rgb(167,233,246)', offset: 0.98 }],
    "10:30" : [{ color: 'rgb(178,255,247)', offset: 0.0 }, { color: 'rgb(248,227,235)', offset: 0.35 }, { color: 'rgb(213,232,219)', offset: 0.72 }, { color: 'rgb(167,233,246)', offset: 0.98 }],
    "11:00" : [{ color: 'rgb(178,255,274)', offset: 0.0 }, { color: 'rgb(248,277,235)', offset: 0.2 }, { color: 'rgb(213,232,219)', offset: 0.7 }],
    "11:30" : [{ color: 'rgb(206,255,255)', offset: 0.25 }, { color: 'rgb(201,234,255)', offset: 1.0 }],
    "12:00" : [{ color: 'rgb(188,244,255)', offset: 0.0}, { color: 'rgb(255,255,250)', offset: 0.75 }, { color: 'rgb(101,174,206)', offset: 1.0 }],
    "12:30" : [{ color: 'rgb(127,217,255)', offset: 0.0}, { color: 'rgb(255,255,250)', offset: 0.6 }, { color: 'rgb(101,174,206)', offset: 1.0 }],
    "13:00" : [{ color: 'rgb(175,209,255)', offset: 0.0}, { color: 'rgb(211,255,255)', offset: 0.45 }, { color: 'rgb(106,149,206)', offset: 1.0 }],
    "13:30" : [{ color: 'rgb(223,253,255)', offset: 0.15}, { color: 'rgb(152,206,206)', offset: 0.95}],
    "14:00" : [{ color: 'rgb(255,201,144)', offset: 0.05}, { color: 'rgb(222,255,246)', offset: 0.68 }, { color: 'rgb(152,206,206)', offset: 0.97 }],
    "14:30" : [{ color: 'rgb(252,214,201)', offset: 0.05}, { color: 'rgb(193,255,250)', offset: 0.57 }, { color: 'rgb(62,90,131)', offset: 1.0 }],
    "15:00" : [{ color: 'rgb(217,200,182)', offset: 0.30 }, { color: 'rgb(159,240,255)', offset: 0.72 }, { color: 'rgb(62,90,131)', offset: 0.98 }],
    "15:30" : [{ color: 'rgb(232,201,167)', offset: 0.20 }, { color: 'rgb(64,160,191)', offset: 1.0 }],
    "16:00" : [{ color: 'rgb(252,222,167)', offset: 0.0 }, { color: 'rgb(255,178,193)', offset: 0.30 }, { color: 'rgb(64,160,191)', offset: 1.0 }],
    "16:30" : [{ color: 'rgb(252,222,196)', offset: 0.0 }, { color: 'rgb(255,198,193)', offset: 0.48 }, { color: 'rgb(255,126,193)', offset: 0.95 }],
    "17:00" : [{ color: 'rgb(252,178,139)', offset: 0.0}, { color: 'rgb(245,106,147)', offset: 0.60 }, { color: 'rgb(62,90,131)', offset: 0.98}],
    "17:30" : [{ color: 'rgb(252,178,139)', offset: 0.05}, { color: 'rgb(62,90,131)', offset: 1.0}],
    "18:00" : [{ color: 'rgb(209,121,113)', offset: 0.20}, { color: 'rgb(90,88,149)', offset: 0.82 }, { color: 'rgb(64,62,90)', offset: 1.0 }],
    "18:30" : [{ color: 'rgb(253,41,34)', offset: 0.0}, { color: 'rgb(252,108,46)', offset: 0.10 }, { color: 'rgb(209,121,113)', offset: 0.38 }, { color: 'rgb(90,88,194)', offset: 0.82 }, { color: 'rgb(64,62,90)', offset: 1.0 }],
    "19:00" : [{ color: 'rgb(144,63,123)', offset: 0.05}, { color: 'rgb(132,186,255)', offset: 0.63 }, { color: 'rgb(70,0,106)', offset: 0.90 }],
    "19:30" : [{ color: 'rgb(144,63,123)', offset: 0.05}, { color: 'rgb(132,186,255)', offset: 0.22 }, { color: 'rgb(70,0,106)', offset: 0.90 }],
    "20:00" : [{ color: 'rgb(0,177,191)', offset: 0.05}, { color: 'rgb(116,64,157)', offset: 0.68 }, { color: 'rgb(18,0,106)', offset: 0.95 }],
    "20:30" : [{ color: 'rgb(245,124,119)', offset: 0.18}, { color: 'rgb(153,63,123)', offset: 0.55 }, { color: 'rgb(57,23,83)', offset: 0.95 }],
    "21:00" : [{ color: 'rgb(144,63,123)', offset: 0.0 }, { color: 'rgb(90,106,126)', offset: 0.48 }, { color: 'rgb(66,32,88)', offset: 1.0 }],
    "21:30" : [{ color: 'rgb(20,0,242)', offset: 0.15 }, { color: 'rgb(66,32,88)', offset: 0.78 }],
    "22:00" : [{ color: 'rgb(14,0,127)', offset: 0.0 }, { color: 'rgb(103,39,234)', offset: 0.10 }, { color: 'rgb(13,32,88)', offset: 0.58 }, { color: 'rgb(13,32,28)', offset: 0.95 }],
    "22:30" : [{ color: 'rgb(14,0,127)', offset: 0.0 }, { color: 'rgb(13,32,88)', offset: 0.58 }, { color: 'rgb(13,32,28)', offset: 0.95 }],
    "23:00" : [{ color: 'rgb(54,0,26)', offset: 0.0 }, { color: 'rgb(31,0,73)', offset: 0.22 }, { color: 'rgb(0,0,98)', offset: 0.52 }, { color: 'rgb(0,0,0)', offset: 1.0 }],
    "23:30" : [{ color: 'rgb(31,0,73)', offset: 0.23 },  { color: 'rgb(0,0,0)', offset: 1.0 }]
};

exports.gradientSlug            = gradientSlug;
exports.currentColour           = currentColour;
exports.currentGradient         = currentGradient;
exports.currentSettingsGradient = currentSettingsGradient;

