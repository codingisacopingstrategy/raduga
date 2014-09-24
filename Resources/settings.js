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
    font: { fontSize: "12dp", fontWeight:  "bold", },
    top: '10dp',
    left: '30dp',
    width: '260dp',
    text: L('where_rainbow')
});
var rainbowExplanationLabel = Raduga.UI.createLabel({
    font: { fontSize: "12dp" },
    top: '0dp',
    left: '30dp',
    width: '260dp',
    text: L('where_rainbow_explanation')
});

var usernameLoggedInLabel = Raduga.UI.createLabel({
    font: { fontSize: "14dp" },
    color: 'black',
    text: L('username') + ': ',
    top: '10dp', left: '40dp',
    width: '260dp'
});

var usernameNewUserLabel = Raduga.UI.createLabel({
    font: { fontSize: "14dp" },
    color: 'black',
    text: L('sign_in_as_new_user'),
    top: '10dp', left: '40dp',
    width: '260dp'
});

var usernameNewUserLabelUnderLine = Ti.UI.createView({
    backgroundColor: 'black',
    height: '1dp',
    left: '40dp',
    width: '127dp'
});


var usernameTextField = Ti.UI.createTextField({
    hintText: L('username'),
    font: { fontSize: "14dp" },
    color: 'rgb(103,103,113)',
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: '10dp', left: '30dp',
    width: '260dp',
    autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
});

var passwordTextField = Ti.UI.createTextField({
    hintText: L('password'),
    font: { fontSize: "14dp" },
    color: 'rgb(103,103,113)',
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: '10dp', left: '30dp',
    width: '260dp',
    passwordMask: true
});

var passwordCheckTextField = Ti.UI.createTextField({
    hintText: L('password_again'),
    font: { fontSize: "14dp" },
    color: 'rgb(103,103,113)',
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: '10dp', left: '30dp',
    width: '260dp',
    passwordMask: true
});

var createRadugaButton = function(titleid) {
    return Ti.UI.createButton({
        titleid: titleid,
        left: '30dp',
        top: '10dp',
        width: '260dp',
        borderSize: '0',
        color: 'rgb(0,255,0)',
        borderRadius: '0dp',
 //       height: 'Ti.UI.SIZE',
        backgroundColor: 'rgba(0,0,0)',
//        font: { fontSize: '20dp' },
        font: { fontSize: "14dp", fontWeight: "bold", },
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
    });
};

var loginButton = createRadugaButton('login');
var logoutButton = createRadugaButton('logout');
var signupButton = createRadugaButton('signup');

var notificationsView = Ti.UI.createView({
    top: '10dp',
    height: '20dp'
});

var notificationsLabel = Raduga.UI.createLabel({
    color: 'black',
    textid: 'notifications',
    font: { fontSize: "14dp" },
    left: '40dp',
});

var notificationsSwitch = Ti.UI.createSwitch({
    value: Ti.App.Properties.getString('notifications') !== 'false',
    right: '30dp',
});

notificationsView.add(notificationsLabel);
notificationsView.add(notificationsSwitch);

var cityTextField = Ti.UI.createTextField({
    hintText: L('city'),
    font: { fontSize: "14dp" },
    color: 'rgb(103,103,113)',
    value: Ti.App.Properties.getString(Raduga.Platform.currentLanguage === 'ru' ? 'city_name_ru' : 'city_name_en'),
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: '10dp', left: '30dp',
    width: '260dp'
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

// handle refreshing the whole of the settings screen
settingsWindow.addEventListener('user_status_change', function() {
    updateUserDialog(settingsScrollView);
});

var updateUserDialog = function(view) {
    view.removeAllChildren(); //TODO: also remove event listeners

    view.add(rainbowExplanationHeadingLabel);
    view.add(rainbowExplanationLabel);

    if (signedUp()) {
        usernameLoggedInLabel.setText(L('username') + ': ' + Ti.App.Properties.getString('username'));
        view.add(usernameLoggedInLabel);
        view.add(usernameNewUserLabel);
        view.add(usernameNewUserLabelUnderLine);
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


    if (loggedIn()) {
        view.add(logoutButton);
    } else {
        if (!signedUp()) {
            view.add(signupButton);
        } else {
            view.add(loginButton);
        }
    }

};

updateUserDialog(settingsScrollView);
