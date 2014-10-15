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
                var message;
                if (e.data.type === "rainbow_prediction") {
                    if (new Date().getHours() < 12) {
                        message = L('rainbow_predicted_morning');
                    } else {
                        message = L('rainbow_predicted_afternoon');
                    }
                } else if (e.data.type === "rainbow_spotted") {
                    message = String.format(L('photo_caption'),
                    e.data[Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en'],
                    e.data.username);
                } else {
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

