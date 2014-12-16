/**
 * FIXME Push notifications callbacks have not yet been implemented for Android
 *
 * Please check push_ios.js for the functionality to implement
 *
 * Setting up Push notifications worked, at some point, but requires more extensive testing
 */

var UI = require('ui');

exports.Push = function(successCallback) {
    this.deviceToken = null;
    this.init = function() {
        var CloudPush = require('ti.cloudpush');

        // We work with GCM, we don’t need to enable the push notifications,
        // we do need to save the device token for subsequent API calls
        CloudPush.retrieveDeviceToken({
            success: function(e) {
                        Ti.API.info('Managed to register for Android push notifications');
                        this.deviceToken = e.deviceToken;
                        successCallback(e.deviceToken);
                    },
            error:  function deviceTokenError(e) {
                        UI.alertError('Failed to register for Android push notifications! ' + e.error);
                   }
        });

        // Process incoming push notifications
        CloudPush.addEventListener('callback', function (e) {
            alert(e.payload);
        });
        // Triggered when the push notifications is in the tray when the app is not running
        CloudPush.addEventListener('trayClickLaunchedApp', function (e) {
            Ti.API.info('Tray Click Launched App (app was not running)');
        });
        // Triggered when the push notifications is in the tray when the app is running
        CloudPush.addEventListener('trayClickFocusedApp', function (e) {
            Ti.API.info('Tray Click Focused App (app was already running)');
        });
    };
};
