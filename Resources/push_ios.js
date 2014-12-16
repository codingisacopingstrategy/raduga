/**
 * This does the initial set up to register push notifications
 * And determines the behaviour in case a push notification is received
 *
 * Exports a function called Push that takes a succesCallback function to which can be passed
 * the obtained deviceToken, if all is succesfully set up
 *
 * Dealing with the app badge (the number next to the icon):
 * This number represents the amount of ‘unread messagse’
 * Unfortunately, with each push message we can not sent a message:
 * ‘increment badge with 1’
 * We have to send the absolute number: so we have to keep track of it
 *
 * FIXME: To activate the push messages callback, a user actually has to click
 * one of the received push messages. If the user clicks on the app icon instead
 * of on the push message, nothing happens. Also the badge number is not reset.
 *
 * If at all possible, the callback should also be launch on resuming the
 * application.
 *
 * FIXME: Needs more extensive testing with users
 */

var UI = require('ui');
var Platform = require('platform');
var users = require('users');

exports.Push = function(successCallback) {
    this.deviceToken = null;
    this.init = function() {

        Ti.Network.registerForPushNotifications({
            // Specifies which notifications to receive
            types: [
                Ti.Network.NOTIFICATION_TYPE_BADGE,
                Ti.Network.NOTIFICATION_TYPE_ALERT,
                Ti.Network.NOTIFICATION_TYPE_SOUND
            ],
            success: function(e) {
                this.deviceToken = e.deviceToken;
                Ti.API.info('Managed to register for iOS push notifications');
                successCallback(e.deviceToken);
            },
            error: function deviceTokenError(e) {
                UI.alertError('Failed to register for iOS push notifications! ' + e.error);
            },
            callback: function(e) {
                // This is what happens when a user has clicked a push message
                var message;
                if (e.data.type === "rainbow_prediction") {
                    // In this case, the push message is to notify us that in the area
                    // where we are, there is large chance of rainbows today
                    if (new Date().getHours() < 12) {
                        message = L('rainbow_predicted_morning');
                    } else {
                        message = L('rainbow_predicted_afternoon');
                    }
                } else if (e.data.type === "rainbow_spotted") {
                    // In this case, someone has spotted (uploaded a photo of) a rainbow
                    // in our vicinity
                    message = String.format(L('photo_caption'),
                    e.data[Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en'],
                    e.data.username);
                } else {
                    // If we don’t recognise the type of message
                    return false;
                }
                var dialog = Ti.UI.createAlertDialog({
                    message: e.data.alert,
                    ok: 'OK',
                    title: L('rainbow')
                }).show();
                Ti.UI.iPhone.setAppBadge(0); // reset the badge counter to 0
                users.modifyUser({custom_fields: { badge: 0}}); // store this online
            }
        });
    };
};

