var setupPush = function (success) {

    var CloudPush = require('ti.cloudpush');

    // We work with GCM, we don’t need to enable the push notifications,
    // we do need to save the device token for subsequent API calls
    CloudPush.retrieveDeviceToken({
        success: function(e) {
                    Ti.API.info('Managed to register for Android push notifications');
                    deviceToken = e.deviceToken;
                    success();
                },
        error:  function deviceTokenError(e) {
                    alertError('Failed to register for Android push notifications! ' + e.error);
               }
    });

    // Process incoming push notifications
    CloudPush.addEventListener('callback', function (evt) {
        alert(evt.payload);
    });
    // Triggered when the push notifications is in the tray when the app is not running
    CloudPush.addEventListener('trayClickLaunchedApp', function (evt) {
        Ti.API.info('Tray Click Launched App (app was not running)');
    });
    // Triggered when the push notifications is in the tray when the app is running
    CloudPush.addEventListener('trayClickFocusedApp', function (evt) {
        Ti.API.info('Tray Click Focused App (app was already running)');
    });
};
