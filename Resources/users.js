/* A series of functions that deal with users: createUser, loginUser */
var signedUp = function() {
   return Boolean(Ti.App.Properties.getString('username'));
};
var loggedIn = function() {
    return Boolean(Ti.App.Properties.getString('sessionID'));
};

var createUser = function(username, password, password_confirmation) {
    if (!username) {
        alert(L('username_blank'));
        return false;
    } else if (!password) {
        alert(L('password_blank'));
        return false;
    } else if (password !== password_confirmation) {
        alert(L('passwords_no_match'));
        return false;
    } else if (!cityTextField.value) {
        alert(L('city_blank'));
        return false;
    }

    activityIndicator.show();
    Cloud.Users.create({
        username: username,
        password: password,
        password_confirmation: password_confirmation,
        custom_fields: {
            language: Ti.Locale.currentLanguage === 'ru' ? 'ru' : 'en',
            notifications: notificationsSwitch.value,
            name_en: Ti.App.Properties.getString('city_name_en'),
            name_ru: Ti.App.Properties.getString('city_name_ru'),
        }
    }, function (e) {
        if (e.success) {
            Raduga.user = e.users[0];
            var user = Raduga.user;
            Ti.App.Properties.setString('sessionID', Cloud.sessionId);
            Ti.App.Properties.setString('username', user.username);
            Ti.App.Properties.setString('userid', user.id);
            settingsWindow.fireEvent('user_status_change');
            initPush();
            alert('Welcome,' + '\n' +
                'username: ' + user.username );
        } else {
            if (e.message.toLowerCase().indexOf("already taken") !== -1) {
                loginUser(username, password);
            } else {
                alertError('Failed creating user: ' + (e.error && e.message) || JSON.stringify(e));
            }
        }
        activityIndicator.hide();
    });
};


var loginUser = function(username, password) {
    if (!password) {
        alert('Please enter password');
        return false;
    }

    activityIndicator.show();
    Cloud.Users.login({
        login: username,
        password: password
    }, function (e) {
        if (e.success) {
            Raduga.user = e.users[0];
            var user = Raduga.user;
            Ti.App.Properties.setString('sessionID', Cloud.sessionId);
            Ti.App.Properties.setString('username', user.username);
            Ti.App.Properties.setString('userid', user.id);
            Ti.API.info("User " +  user.username + " logged in");
            settingsWindow.fireEvent('user_status_change');
            initPush();
        } else {
            alert('Error for ' + username + ' and ' + password + ':\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
        activityIndicator.hide();
    });
};

var logoutUser = function() {
    activityIndicator.show();
    Cloud.Users.logout(function (e) {
        if (e.success) {
            Ti.App.Properties.setString('sessionID', Cloud.sessionId); // set to null
            Ti.API.info('Successfully logged out');
            settingsWindow.fireEvent('user_status_change');
        } else {
            alertError('Failed logging out user: ' + (e.error && e.message) || JSON.stringify(e));
        }
    activityIndicator.hide();
    });
};

