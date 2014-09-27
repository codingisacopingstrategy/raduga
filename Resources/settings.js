// Cities Selection

var citiesWindow = Ti.UI.createWindow({
    modal: true
});

var tableData = [];

var cityNameField = Raduga.Platform.currentLanguage === 'ru' ? 'name_ru' : 'name_en';
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

// Settings Form

/* View code */
var activityIndicator = Ti.UI.createActivityIndicator({
    height: Ti.UI.SIZE,
    width: Ti.UI.SIZE,
    style: Raduga.Platform.ios ? Ti.UI.iPhone.ActivityIndicatorStyle.BIG : Ti.UI.ActivityIndicatorStyle.BIG,
    backgroundColor: 'rbga(255,255,255,0.2)',
    borderRadius: '5dp'
});

var rainbowExplanationHeadingLabel = Raduga.UI.createLabel({
    font: { fontSize: "16dp" },
    top: '10dp',
    width: Raduga.Platform.width * .8125,
    text: L('where_rainbow')
});
var rainbowExplanationLabel = Raduga.UI.createLabel({
    font: { fontSize: "16dp" },
    top: '0dp',
    width: Raduga.Platform.width * .8125,
    text: L('where_rainbow_explanation')
});

var usernameLoggedInLabel = Raduga.UI.createLabel({
    font: { fontSize: "14dp" },
    color: 'black',
    text: L('username') + ': ',
    top: '10dp',
    width: Raduga.Platform.width * .75,
});
var usernameNewUserLabel = Raduga.UI.createLabel({
    font: { fontSize: "14dp" },
    color: 'black',
    text: L('sign_in_as_new_user'),
    bottom: '1dp',
    left: 0,
    width: Ti.UI.SIZE,
});
var usernameNewUserLabelUnderLine = Ti.UI.createView({
    backgroundColor: 'black',
    height: '1dp',
    left: '0',
    width: '127dp',
    bottom: 0,
});
var usernameNewUserView = Ti.UI.createView({
    top: '10dp',
    height: '20dp',
    width: Raduga.Platform.width * .75,
});
usernameNewUserView.add(usernameNewUserLabel);
usernameNewUserView.add(usernameNewUserLabelUnderLine);


var usernameTextField = Raduga.UI.createTextField({
    hintText: L('username'),
    autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
});
var passwordTextField = Raduga.UI.createTextField({
    hintText: L('password'),
    passwordMask: true
});
var passwordCheckTextField = Raduga.UI.createTextField({
    hintText: L('password_again'),
    passwordMask: true
});

var loginButton  = Raduga.UI.createButton('login');
var logoutButton = Raduga.UI.createButton('logout');
var signupButton = Raduga.UI.createButton('signup');

var notificationsView = Ti.UI.createView({
    top: '10dp',
    height: '20dp',
    width: '260dp',
});
var notificationsLabel = Raduga.UI.createLabel({
    color: 'black',
    textid: 'notifications',
    font: { fontSize: "14dp" },
    left: '10dp',
});
var notificationsSwitch = Ti.UI.createSwitch({
    value: Ti.App.Properties.getString('notifications') !== 'false',
    right: '0',
});
notificationsView.add(notificationsLabel);
notificationsView.add(notificationsSwitch);

var cityTextField = Raduga.UI.createTextField({
    hintText: L('city'),
    value: Ti.App.Properties.getString(Raduga.Platform.currentLanguage === 'ru' ? 'city_name_ru' : 'city_name_en'),
});

var linkTermsLabel = Raduga.UI.createLabel({
    font: { fontSize: "12dp" },
    color: 'black',
    text: L('terms'),
    left: '0', bottom: '1dp',
    width: Ti.UI.SIZE
});
var linkTermsLabelUnderLine = Ti.UI.createView({
    backgroundColor: 'black',
    height: '1dp',
    left: '0', bottom: '0dp',
    width: '101dp'
});
var linkAboutLabel = Raduga.UI.createLabel({
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
    top: '10dp',
    height: '20dp',
    width: Raduga.Platform.width * .8125,
});
linksView.add(linkTermsLabel);
linksView.add(linkTermsLabelUnderLine);
linksView.add(linkAboutLabel);
linksView.add(linkAboutLabelUnderLine);

// for Android, where the toolbar is on top
var settingsTopSpace = Ti.UI.createView({
    width: Raduga.Platform.width,
    height: '30dp',
    top: 0, bottom: 0,
});

// for iOS, where the toolbar is below
var settingsBottomSpace = Ti.UI.createView({
    width: Raduga.Platform.width,
    height: '50dp',
    top: '10dp',
});

var settingsScrollView = Ti.UI.createScrollView({
   contentWidth: Raduga.Platform.width,
   contentHeight: 'auto',
   left: '0',
   top: '20dp',
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
    if (loggedIn()) {
        Cloud.Users.update({
            username: usernameTextField.value,
            custom_fields: {
                name_en: e.rowData.val.name_en,
                name_ru: e.rowData.val.name_ru,
                coordinates: [[e.rowData.val.lon, e.rowData.val.lat]],
                language: Raduga.Platform.currentLanguage,
            }
        }, function (e) {
            if (e.success) {
                Ti.API.info('Succesfully updated location settings for user ' + e.users[0].username + " at " +
                Ti.App.Properties.getString('city_name_en') + '/' + Ti.App.Properties.getString('city_name_ru') +
                ' (' + parseFloat(Ti.App.Properties.getString('city_lon')) + ', ' +
                parseFloat(Ti.App.Properties.getString('city_lat')) + ')' );
            } else {
                alertError('Failed updating location settings: ' + (e.error && e.message) || JSON.stringify(e));
            }
        });
    }
});
notificationsSwitch.addEventListener('change', function() {
    Ti.App.Properties.setString('notifications', String(notificationsSwitch.value));
    if (loggedIn()) {
        Cloud.Users.update({
            username: usernameTextField.value,
            custom_fields: {
                notifications: notificationsSwitch.value,
                language: Raduga.Platform.currentLanguage,
            }
        }, function (e) {
            if (e.success) {
                Ti.API.info('Succesfully updated push notification settings for user ' + e.users[0].username);
            } else {
                alertError('Failed updating push notification settings ' + (e.error && e.message) || JSON.stringify(e));
            }
        });
    }
});
// Automatically go to next field after return:
usernameTextField.addEventListener('return', function() {
    passwordTextField.focus();
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
usernameNewUserLabel.addEventListener('click', newUser);
signupButton.addEventListener('click', function(){
    createUser(usernameTextField.value, passwordTextField.value, passwordCheckTextField.value);
});
loginButton.addEventListener('click', function() {
    // if the username is known there is no textField:
    var username = usernameTextField.value ? usernameTextField.value : Ti.App.Properties.getString('username');
    loginUser(username, passwordTextField.value);
});
logoutButton.addEventListener('click', logoutUser);

// external links
linkTermsLabel.addEventListener('click', function(){
    Ti.Platform.openURL("http://pinkponyexpress.nl/#63");
});
linkAboutLabel.addEventListener('click', function(){
    Ti.Platform.openURL("http://pinkponyexpress.nl/#63");
});

// handle refreshing the whole of the settings screen
settingsWindow.addEventListener('user_status_change', function() {
    updateUserDialog(settingsScrollView);
});

var updateUserDialog = function(view) {
    view.removeAllChildren(); //TODO: also remove event listeners
    if (Raduga.Platform.android) {
        view.add(settingsTopSpace);
    }
    view.add(rainbowExplanationHeadingLabel);
    view.add(rainbowExplanationLabel);
    if (signedUp()) {
        usernameLoggedInLabel.setText(L('username') + ': ' + Ti.App.Properties.getString('username'));
        view.add(usernameLoggedInLabel);
        view.add(usernameNewUserView);
    } else {
        usernameTextField.value = '';
        view.add(usernameTextField);
    };
    if (!loggedIn()) {
        // We are not logged in. Add the pass
        view.add(passwordTextField);
        if (!signedUp()) {
            view.add(passwordCheckTextField);
        }
    }
    view.add(cityTextField);
    view.add(notificationsView);
    // if a: x else if b: y else: z
    view.add(loggedIn() ? logoutButton : signedUp() ? loginButton : signupButton );
    view.add(linksView);
    if (Raduga.Platform.ios) {
        view.add(settingsBottomSpace);
    }
};

updateUserDialog(settingsScrollView);
