/** 
 * This modules caches information about the Device we are running on
 *
 * From the docs: Set local variables to avoid calling native methods
 * http://docs.appcelerator.com/titanium/3.0/#!/guide/Coding_Best_Practices-section-30082362_CodingBestPractices-Setlocalvariablestoavoidcallingnativemethods
 */

exports.osname = Ti.Platform.osname;
exports.ios = Ti.Platform.name === 'iPhone OS';
exports.android = exports.osname === 'android';
exports.currentLanguage = Ti.Locale.currentLanguage;
exports.width = Ti.Platform.displayCaps.platformWidth;
exports.height = Ti.Platform.displayCaps.platformHeight;

Ti.API.info(["OS:       " + exports.osname,
             "Language: " + exports.currentLanguage,
             "Screen:   " + exports.width + "*" + exports.height].join("\n"));

