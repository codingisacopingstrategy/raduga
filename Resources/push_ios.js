var setupPush = function (success) {

    Ti.Network.registerForPushNotifications({
        // Specifies which notifications to receive
        types: [
            Ti.Network.NOTIFICATION_TYPE_BADGE,
            Ti.Network.NOTIFICATION_TYPE_ALERT,
            Ti.Network.NOTIFICATION_TYPE_SOUND
        ],
        success: function(e) {
            deviceToken = e.deviceToken;
            Ti.API.info('Managed to register for iOS push notifications');
            success();
        },
        error: function deviceTokenError(e) {
            alertError('Failed to register for iOS push notifications! ' + e.error);
        },
        callback: function(e) {
            alert('Received push: ' + JSON.stringify(e));
        }
    });

};
