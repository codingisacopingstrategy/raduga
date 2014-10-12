var UI = require('ui');
var Platform = require('platform');
var users = require('users');

var settingsWindow = Ti.UI.createWindow({
    orientationModes: [Ti.UI.PORTRAIT],
    width: Platform.width,
    height: Platform.height,
    backgroundGradient: gradients.currentSettingsGradient(),
    navBarHidden: true,
});

// Cities Selection

var citiesWindow = Ti.UI.createWindow({
    modal: true
});

var tableData = [];

var cityNameField = Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en';
for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    tableData.push({ title: city[cityNameField], val: city });
}

var citiesSearch = Ti.UI.createSearchBar({
    barColor:'#000',
    showCancel:true,
    height:43,
    top:0,
});

var citiesTable = Ti.UI.createTableView({
    top: '20dp',
    data: tableData,
    search: citiesSearch
});

citiesWindow.add(citiesTable);
citiesSearch.addEventListener('cancel', function(e) {
    citiesWindow.close();
});

// Settings Form Window

/* View code */
var activityIndicator = Ti.UI.createActivityIndicator({
    height: Ti.UI.SIZE,
    width: Ti.UI.SIZE,
    style: Platform.ios ? Ti.UI.iPhone.ActivityIndicatorStyle.BIG : Ti.UI.ActivityIndicatorStyle.BIG,
    backgroundColor: 'rbga(255,255,255,0.2)',
    borderRadius: '5dp'
});

var rainbowExplanationHeadingLabel = UI.createLabel({
    font: { fontSize: "16dp", fontWeight: 'bold' },
    top: '10dp',
    width: Platform.width * .8125,
    height: Ti.UI.SIZE,
    text: L('where_rainbow')
});
var rainbowExplanationLabel = UI.createLabel({
    font: { fontSize: "16dp" },
    top: 0,
    width: Platform.width * .8125,
    height: Ti.UI.SIZE,
    text: L('where_rainbow_explanation')
});

var usernameLoggedInLabel = UI.createLabel({
    font: { fontSize: "14dp" },
    color: 'black',
    text: L('username') + ': ',
    top: '10dp',
    width: Platform.width * .75,
});
var usernameNewUserLabel = UI.createLabel({
    font: { fontSize: "14dp" },
    color: 'black',
    text: L('sign_in_as_new_user'),
    bottom: '1dp',
    left: '6dp',
    width: Ti.UI.SIZE,
});
var usernameNewUserLabelUnderLine = Ti.UI.createView({
    backgroundColor: 'black',
    height: '1dp',
    left: '6dp',
    width: '127dp',
    bottom: 0,
});
var usernameNewUserView = Ti.UI.createView({
    top: '10dp',
    height: '20dp',
    width: Platform.width * .75,
});
usernameNewUserView.add(usernameNewUserLabel);
usernameNewUserView.add(usernameNewUserLabelUnderLine);


var usernameTextField = UI.createTextField({
    hintText: L('username'),
    autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
});
var passwordTextField = UI.createTextField({
    hintText: L('password'),
    passwordMask: true
});
var passwordCheckTextField = UI.createTextField({
    hintText: L('password_again'),
    passwordMask: true
});

var notificationsView = Ti.UI.createView({
    top: '10dp',
    height: '31dp',
    width: '260dp',
});
var notificationsLabel = UI.createLabel({
    color: 'black',
    textid: 'notifications',
    font: { fontSize: "14dp" },
    left: '6dp',
    bottom: '4dp',
});
var notificationsSwitch = Ti.UI.createSwitch({
    value: Ti.App.Properties.getString('notifications') !== 'false',
    right: 0,
    bottom: 0,
});
notificationsView.add(notificationsLabel);
notificationsView.add(notificationsSwitch);

var cityTextField = UI.createTextField({
    hintText: L('city'),
    value: Ti.App.Properties.getString(Platform.currentLanguage === 'ru' ? 'city_name_ru' : 'city_name_en'),
});

var loginButton  = UI.createButton('login');
var logoutButton = UI.createButton('logout');
var signupButton = UI.createButton('signup');

var settingsButtonView = Ti.UI.createView({
    height: Ti.UI.SIZE,
});
settingsButtonView.add(loginButton);
settingsButtonView.add(logoutButton);
settingsButtonView.add(signupButton);

var linkTermsLabel = UI.createLabel({
    font: { fontSize: "12dp" },
    color: 'black',
    text: L('terms'),
    left: 0, bottom: '1dp',
    width: Ti.UI.SIZE
});
var linkTermsLabelUnderLine = Ti.UI.createView({
    backgroundColor: 'black',
    height: '1dp',
    left: 0, bottom: 0,
    width: '101dp'
});
var linkAboutLabel = UI.createLabel({
    font: { fontSize: "12dp" },
    color: 'black',
    text: L('about'),
    right: 0, bottom: '1dp',
    width: Ti.UI.SIZE
});
var linkAboutLabelUnderLine = Ti.UI.createView({
    backgroundColor: 'black',
    height: '1dp',
    right: 0, bottom: 0,
    width: '82dp'
});
var linksView = Ti.UI.createView({
    top: '6dp',
    height: Ti.UI.SIZE,
    width: Platform.width * .8125,
});
linksView.add(linkTermsLabel);
linksView.add(linkTermsLabelUnderLine);
linksView.add(linkAboutLabel);
linksView.add(linkAboutLabelUnderLine);
var copyrightLabel = UI.createLabel({
    font: { fontSize: "12dp" },
    color: 'black',
    text: L('copyright'),
    top: '10dp',
    width: Ti.UI.SIZE,
});



// for Android has the toolbar on top
var settingsTopSpace = Ti.UI.createView({
    width: Platform.width,
    height: Platform.android ? '50dp': '20dp',
    top: 0, bottom: 0,
});

// for iOS, where the toolbar is below
var settingsBottomSpace = Ti.UI.createView({
    width: Platform.width,
    height: '50dp',
    top: '10dp',
});

// see scrollview in api docs:
var settingsScrollView = Ti.UI.createScrollView({
    width: Platform.width,
    height: Platform.height,
    contentWidth: Platform.width,
    /*contentHeight: 'auto', */
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    layout: 'vertical',
    showVerticalScrollIndicator: true,
    showHorizontalScrollIndicator: false
});

settingsWindow.add(settingsScrollView);
settingsWindow.add(activityIndicator);



//
// Saving settings
//
citiesTable.addEventListener('click', function(e) {
    cityTextField.value = e.rowData.title;
    Ti.App.Properties.setString('city_name_en', e.rowData.val.name_en);
    Ti.App.Properties.setString('city_name_ru', e.rowData.val.name_ru);
    Ti.App.Properties.setString('city_lat', e.rowData.val.lat);
    Ti.App.Properties.setString('city_lon', e.rowData.val.lon);
    citiesWindow.close();
    if (users.loggedIn()) {
        Cloud.Users.update({
            username: usernameTextField.value,
            custom_fields: {
                name_en: e.rowData.val.name_en,
                name_ru: e.rowData.val.name_ru,
                coordinates: [[e.rowData.val.lon, e.rowData.val.lat]],
                language: Platform.currentLanguage,
            }
        }, function (e) {
            if (e.success) {
                Ti.API.info('Succesfully updated location settings for user ' + e.users[0].username + " at " +
                Ti.App.Properties.getString('city_name_en') + '/' + Ti.App.Properties.getString('city_name_ru') +
                ' (' + parseFloat(Ti.App.Properties.getString('city_lon')) + ', ' +
                parseFloat(Ti.App.Properties.getString('city_lat')) + ')' );
            } else {
                UI.alertError('Failed updating location settings: ' + (e.error && e.message) || JSON.stringify(e));
            }
        });
    }
});
notificationsSwitch.addEventListener('change', function() {
    Ti.App.Properties.setString('notifications', String(notificationsSwitch.value));
    if (users.loggedIn()) {
        Cloud.Users.update({
            username: usernameTextField.value,
            custom_fields: {
                notifications: notificationsSwitch.value,
                language: Platform.currentLanguage,
            }
        }, function (e) {
            if (e.success) {
                Ti.API.info('Succesfully updated push notification settings for user ' + e.users[0].username);
            } else {
                UI.alertError('Failed updating push notification settings ' + (e.error && e.message) || JSON.stringify(e));
            }
        });
    }
});
// Automatically go to next field after return:
usernameTextField.addEventListener('return', function() {
    passwordTextField.focus();
});
usernameTextField.addEventListener('blur', function() {
    usernameTextField.setValue(usernameTextField.getValue().toLowerCase());
});
passwordTextField.addEventListener('return', function() {
    passwordCheckTextField.focus();
});
passwordCheckTextField.addEventListener('return', function() {
    cityTextField.focus();
});
passwordTextField.addEventListener('return', function() {
    passwordCheckTextField.focus();
});
passwordCheckTextField.addEventListener('return', function() {
    cityTextField.focus();
});

// the city selection window
cityTextField.addEventListener('focus', function(e) {
    cityTextField.blur();
    citiesWindow.open();
    citiesSearch.focus();
});

// setup actions for the various user labels
usernameNewUserLabel.addEventListener('click', users.newUser);
signupButton.addEventListener('click', function(){
    users.createUser(usernameTextField.value, passwordTextField.value, passwordCheckTextField.value, notificationsSwitch.value);
});
loginButton.addEventListener('click', function() {
    // if the username is known there is no textField:
    var username = usernameTextField.value ? usernameTextField.value : Ti.App.Properties.getString('username');
    users.loginUser(username, passwordTextField.value);
});
logoutButton.addEventListener('click', users.logoutUser);

// external links
linkTermsLabel.addEventListener('touchstart', function(){
    Ti.Platform.openURL("http://pinkponyexpress.nl/#63");
});
linkAboutLabel.addEventListener('touchstart', function(){
    Ti.Platform.openURL("http://pinkponyexpress.nl/#63");
});

settingsScrollView.add(settingsTopSpace);
settingsScrollView.add(rainbowExplanationHeadingLabel);
settingsScrollView.add(rainbowExplanationLabel);
settingsScrollView.add(usernameLoggedInLabel);
settingsScrollView.add(usernameNewUserView);
settingsScrollView.add(usernameTextField);
settingsScrollView.add(passwordTextField);
settingsScrollView.add(passwordCheckTextField);
settingsScrollView.add(notificationsView);
settingsScrollView.add(cityTextField);
settingsScrollView.add(settingsButtonView);
settingsScrollView.add(linksView);
settingsScrollView.add(copyrightLabel);
if (Platform.ios) {
    settingsScrollView.add(settingsBottomSpace);
}

// FIXME: THIS SEEMS BUGGY, SOMETIMES ELEMENTS ARE MISSING OR MARGINS MOVE
// https://github.com/codingisacopingstrategy/raduga/issues/2
var updateUserDialog = function() {

    // we can’t just simply use the element’s .hide() and .show() methods,
    // because then they still take up space in the layout
    // ( except in case of the login logout signup buttons, because they are
    // absolutely positioned )
    var hide = function(el) {
        if (el.getHeight() === 0) {
            return; // button is already hidden
        } else {
            el.hide();
            el.setHeight(0);
            el.setTop(0);
        }
    };
    var show = function(el, height) {
        if (el.getHeight() !== 0) {
            return; // button is already shown
        } else {
            el.show();
            el.setHeight(height ? height : Ti.UI.SIZE);
            el.setTop('10dp');
        }
    };

    notificationsSwitch.setValue(Ti.App.Properties.getString('notifications') !== 'false');
    if (users.signedUp()) {
        usernameLoggedInLabel.setText(L('username') + ': ' + Ti.App.Properties.getString('username'));
        hide(usernameTextField);
        show(usernameLoggedInLabel);
        show(usernameNewUserView, '20dp');
    } else {
        usernameTextField.value = '';
        cityTextField.value = '';
        show(usernameTextField);
        hide(usernameLoggedInLabel);
        hide(usernameNewUserView);
    };
    if (users.loggedIn()) {
        passwordTextField.value = '';
        passwordCheckTextField.value = '';
        hide(passwordTextField);
        hide(passwordCheckTextField);
        logoutButton.show();
        loginButton.hide();
        signupButton.hide();
    } else {
        if (users.signedUp()) {
            show(passwordTextField);
            hide(passwordCheckTextField);
            logoutButton.hide();
            loginButton.show();
            signupButton.hide();
        } else {
            show(passwordTextField);
            show(passwordCheckTextField);
            logoutButton.hide();
            loginButton.hide();
            signupButton.show();
        }
    }
};
exports.Settings = function() {
    this.window = settingsWindow;
    this.updateColours = function() {
        settingsWindow                  .setBackgroundGradient(gradients.currentSettingsGradient());
        usernameLoggedInLabel           .setColor(gradients.currentColour());
        usernameLoggedInLabel           .setColor(gradients.currentColour());
        rainbowExplanationHeadingLabel  .setColor(gradients.currentColour());
        rainbowExplanationLabel         .setColor(gradients.currentColour());
        usernameNewUserLabel            .setColor(gradients.currentColour());
        usernameNewUserLabelUnderLine   .setBackgroundColor(gradients.currentColour());
        notificationsLabel              .setColor(gradients.currentColour());
        linkAboutLabel                  .setColor(gradients.currentColour());
        linkTermsLabel                  .setColor(gradients.currentColour());
        linkAboutLabelUnderLine         .setBackgroundColor(gradients.currentColour());
        linkTermsLabelUnderLine         .setBackgroundColor(gradients.currentColour());
        copyrightLabel                  .setColor(gradients.currentColour());
    };
    this.refreshUI = updateUserDialog;
    this.startLoading = function() {
        activityIndicator.show();
    };
    this.stopLoading = function() {
        activityIndicator.hide();
    };
    this.updateColours();
};
