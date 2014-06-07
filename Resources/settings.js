// Cities Selection

var citiesWindow = Ti.UI.createWindow({
    modal: true
});

var tableData = [];

var cityNameField = Ti.Locale.currentLanguage === 'ru' ? 'name_ru' : 'name_en';
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

var usernameLabel = Ti.UI.createLabel({
    color: 'black',
    textid: 'username',
    top: '10dp', left: '10dp',
    width: '250dp'
});

var usernameTextField = Ti.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: '10dp', left: '10dp',
    width: '250dp',
    autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
});

var passwordLabel = Ti.UI.createLabel({
    color: 'black',
    textid: 'password',
    top: '10dp', left: '10dp',
    width: '250dp'
});

var passwordTextField = Ti.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: '10dp', left: '10dp',
    width: '250dp',
    passwordMask: true
});

var passwordCheckLabel = Ti.UI.createLabel({
    color: 'black',
    textid: 'password_again',
    top: '10dp', left: '10dp',
    width: '250dp'
});

var passwordCheckTextField = Ti.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: '10dp', left: '10dp',
    width: '250dp',
    passwordMask: true
});

var createRadugaButton = function(titleid) {
    return Ti.UI.createButton({
        titleid: titleid,
        top: '10dp',
        width: '100dp',
        borderSize: '1dp',
        borderColor: '#919191',
        color: 'black',
        borderRadius: '3dp',
        height: '36dp',
        backgroundColor: 'rgba(255,255,255,0.4)',
        font: { fontSize: '20dp' },
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
    });
};

var loginButton = createRadugaButton('login');
var logoutButton = createRadugaButton('logout');
var signupButton = createRadugaButton('signup');

var notificationsLabel = Ti.UI.createLabel({
    color: 'black',
    textid: 'notifications',
    top: '10dp', left: '10dp',
    width: '250dp'
});

var notificationsSwitch = Ti.UI.createSwitch({
    value: Ti.App.Properties.getString('notifications') !== 'false',
    top: '10dp', left: '10dp',
});

var cityLabel = Ti.UI.createLabel({
    color: 'black',
    textid: 'city',
    top: '10dp', left: '10dp',
    width: '250dp'
});

var cityTextField = Ti.UI.createTextField({
    value: Ti.App.Properties.getString(Ti.Locale.currentLanguage === 'ru' ? 'city_name_ru' : 'city_name_en'),
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: '10dp', left: '10dp',
    width: '250dp'
});


var settingsScrollView = Ti.UI.createScrollView({
   contentWidth: Raduga.Platform.width,
   contentHeight: 'auto',
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

// setup user actions
logoutButton.addEventListener('click', logoutUser);

var handleSignup = function() {
    createUser(usernameTextField.value, passwordTextField.value, passwordCheckTextField.value);
};
signupButton.addEventListener('click', handleSignup);

var handleLogin = function() {
    loginUser(usernameTextField.value, passwordTextField.value);
};
loginButton.addEventListener('click', handleLogin);


// handle settings refresh
settingsWindow.addEventListener('user_status_change', function() {
    updateUserDialog(settingsScrollView);
});

var updateUserDialog = function(view) {
    view.removeAllChildren(); //TODO: also remove event listeners

    if (signedUp()) {
        usernameTextField.value = Ti.App.Properties.getString('username');
        if (loggedIn()) {
            usernameTextField.setEnabled(false); // Android only
            usernameTextField.setEditable(false);
        }
    } else {
        usernameTextField.value = '';
        usernameTextField.setEnabled(true); // Android only
        usernameTextField.setEditable(true);
    }

    view.add(usernameLabel);
    view.add(usernameTextField);

    if (!loggedIn()) {
        // We are not logged in. Add the pass
        view.add(passwordLabel);
        view.add(passwordTextField);
        if (!signedUp()) {
            view.add(passwordCheckLabel);
            view.add(passwordCheckTextField);
        }
    }

    view.add(cityLabel);
    view.add(cityTextField);
    view.add(notificationsLabel);
    view.add(notificationsSwitch);


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
