// functions for logging in, logging out, and creating new users
/* A series of functions that deal with users: createUser, loginUser */
exports.signedUp = function() {
    return Boolean(Ti.App.Properties.getString('username'));
};
exports.loggedIn = function() {
    return Boolean(Ti.App.Properties.getString('sessionID'));
};

exports.createUser = function(username, password, password_confirmation, notifications) {
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

    Ti.App.fireEvent('startedLoading');
    Cloud.Users.create({
        username: username,
        password: password,
        password_confirmation: password_confirmation,
        custom_fields: {
            language: Platform.currentLanguage === 'ru' ? 'ru' : 'en',
            notifications: notifications,
            name_en: Ti.App.Properties.getString('city_name_en'),
            name_ru: Ti.App.Properties.getString('city_name_ru'),
            language: Platform.currentLanguage
        }
    }, function (e) {
        if (e.success) {
            var user = e.users[0];
            Ti.App.Properties.setString('sessionID', Cloud.sessionId);
            Ti.App.Properties.setString('username', user.username);
            Ti.App.Properties.setString('userid', user.id);
            Ti.App.fireEvent('user_status_change');
            Ti.App.fireEvent('loggedIn');
            var dialog = Ti.UI.createAlertDialog({
                message: L('username') + ': ' + user.username,
                ok: 'OK',
                title: L('welcome')
            }).show();
        } else {
            if (e.message.toLowerCase().indexOf("already taken") !== -1) {
                exports.loginUser(username, password);
            } else {
                alertError('Failed creating user: ' + (e.error && e.message) || JSON.stringify(e));
            }
        }
        Ti.App.fireEvent('stoppedLoading');
    });
};


exports.loginUser = function(username, password) {
    if (!password) {
        alert('Please enter password');
        return false;
    }

    Ti.App.fireEvent('startedLoading');
    Cloud.Users.login({
        login: username,
        password: password
    }, function (e) {
        if (e.success) {
            var user = e.users[0];
            Ti.App.Properties.setString('sessionID', Cloud.sessionId);
            Ti.App.Properties.setString('username', user.username);
            Ti.App.Properties.setString('userid', user.id);
            Ti.API.info("User " +  user.username + " logged in");
            Ti.App.fireEvent('user_status_change');
            Ti.App.fireEvent('loggedIn');
            if (Raduga.photos.length > 0) {
                updateSpottedMessage();
            }
        } else {
            alert('Error for ' + username + ' and ' + password + ':\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
        Ti.App.fireEvent('stoppedLoading');
    });
};

exports.logoutUser = function() {
    Ti.App.fireEvent('startedLoading');
    Cloud.Users.logout(function (e) {
        if (e.success) {
            Ti.App.Properties.setString('sessionID', Cloud.sessionId); // set to null
            Ti.API.info('Successfully logged out');
            Ti.App.fireEvent('user_status_change');
            Ti.App.fireEvent('loggedOut');
        } else {
            alertError('Failed logging out user: ' + (e.error && e.message) || JSON.stringify(e));
        }
        Ti.App.fireEvent('stoppedLoading');
    });
};

exports.newUser = function() {
    Ti.App.Properties.setString('username', '');
    Ti.App.Properties.setString('city_name_en', '');
    Ti.App.Properties.setString('city_name_ru', '');
    Ti.App.Properties.setString('city_lat', '');
    Ti.App.Properties.setString('city_lon', '');
    Ti.App.Properties.setString('notifications', '');
    notificationsSwitch.setValue(true);
    if (exports.loggedIn) {
        exports.logoutUser();
    } else {
        Ti.App.fireEvent('user_status_change');
    }
};

exports.updateUser = function() {
    Cloud.Users.showMe(function (e) {
        if (e.success) {
            var user = e.users[0];

            Ti.API.info("User " +  user.username + " " + user.id + " logged in at " +
            Ti.App.Properties.getString('city_name_en') + '/' + Ti.App.Properties.getString('city_name_ru') +
            ' (' + parseFloat(Ti.App.Properties.getString('city_lon')) + ', ' +
            parseFloat(Ti.App.Properties.getString('city_lat')) + ')' );

            Ti.App.Properties.setString('sessionID', Cloud.sessionId);
            Ti.App.Properties.setString('username', user.username);
            Ti.App.Properties.setString('userid', user.id);
            Ti.App.fireEvent('loggedIn');
            Ti.App.fireEvent('launched');
        } else {
            // this way the will know we need to log in.
            Ti.API.info("No user logged in");
            Ti.App.Properties.setString('sessionID', '');
            Ti.App.fireEvent('user_status_change');
            Ti.App.fireEvent('loggedOut');
            Ti.App.fireEvent('launched');
        }
    });
};
