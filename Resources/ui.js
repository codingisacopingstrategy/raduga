exports.createLabel = function(options) {
    /**
     * As Titianium doesn’t allow to set a default fontSize, we create our own method for
     * initiating labels that allows us to add default settings
     */
    if (Raduga.Platform.osname === 'android') {
        if (typeof options.font === "undefined") {
            options.font = { fontSize: "16dp" };
        }
    }
    return Ti.UI.createLabel(options);
};

exports.createTextField = function(options) {
    /**
     * As Titianium doesn’t allow to set a default fontSize, we create our own method for
     * initiating labels that allows us to add default settings
     */
    options.font = { fontSize: "14dp" };
    options.color = 'rgb(103,103,113)';
    options.borderStyle = Ti.UI.INPUT_BORDERSTYLE_NONE;
    options.backgroundColor = 'rgb(255,255,255)';
    options.top = '10dp';
    options.height = '20dp';
    options.width = '246dp';

    return Ti.UI.createTextField(options);
};
exports.createButton = function(titleid) {
    return Ti.UI.createButton({
        titleid: titleid,
        top: '10dp',
        width: Raduga.Platform.width * .76875,
        borderSize: '0',
        color: 'rgb(0,255,0)',
        borderRadius: '0dp',
        backgroundColor: 'rgba(0,0,0)',
        font: { fontSize: "14dp", fontWeight: "bold", },
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
    });
};

/* Error Handling */

exports.alertError = function(error) {
    /**
     * Titanium uses an alert box in case of error in many of it’s code examples
     * It’s a useful pattern, except that the box pops up saying ‘Alert’ whereas
     * it is more clear if it has ‘Error’ as a title.
     */
    var dialog = Ti.UI.createAlertDialog({
        message: error,
        ok: 'OK',
        title: L('error')
    }).show();
};
