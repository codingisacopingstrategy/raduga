/* A series of functions that deal with users: createUser, loginUser */
var signedUp = function() {
   return Boolean(Ti.App.Properties.getString('username'));
};
var loggedIn = function() {
    return Boolean(Ti.App.Properties.getString('sessionID'));
};

var createUser = function(username, password, password_confirmation) {
    if (!username) {
        alert('Please enter username');
        return false;
    } else if (!password) {
        alert('Please enter password');
        return false;
    } else if (password !== password_confirmation) {
        alert('Passwords do not match');
        return false;
    }

    Cloud.Users.create({
        username: username,
        password: password,
        password_confirmation: password_confirmation
    }, function (e) {
        if (e.success) {
            Raduga.user = e.users[0];
            var user = Raduga.user;
            Ti.App.Properties.setString('sessionID', Cloud.sessionId);
            Ti.App.Properties.setString('username', user.username);
            settingsWindow.fireEvent('user_status_change');
            alert('Welcome,' + '\n' +
                'username: ' + user.username );
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
};


var loginUser = function(password) {
    if (!password) {
        alert('Please enter password');
        return false;
    }
    var username = Ti.App.Properties.getString('username');
    Cloud.Users.login({
        login: username,
        password: password
    }, function (e) {
        if (e.success) {
            Raduga.user = e.users[0];
            var user = Raduga.user;
            Ti.App.Properties.setString('sessionID', Cloud.sessionId);
            Ti.App.Properties.setString('username', user.username);
            Ti.API.info("User " +  user.username + " logged in");
            settingsWindow.fireEvent('user_status_change');
        } else {
            alert('Error for ' + username + ' and ' + password + ':\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
};


/* View code */
var usernameLabel = Titanium.UI.createLabel({
    color: 'white',
    text: 'User Name',
    top: 10, left: 10,
    width: 250
});

var usernameTextField = Ti.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: 10, left: 10,
    width: 250
});

var passwordLabel = Titanium.UI.createLabel({
    color: 'white',
    text: 'Password',
    top: 10, left: 10,
    width: 250
});

var passwordTextField = Ti.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: 10, left: 10,
    width: 250,
    passwordMask: true
});

var passwordCheckLabel = Titanium.UI.createLabel({
    color: 'white',
    text: 'Password, again:',
    top: 10, left: 10,
    width: 250
});

var passwordCheckTextField = Ti.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: 10, left: 10,
    width: 250,
    passwordMask: true
});

var settingsButton = Titanium.UI.createButton({
   title: 'Save',
   top: 10,
   width: 100
});

var updateUserDialog = function(view) {
    view.remove(usernameLabel);
    view.remove(usernameTextField);
    view.remove(passwordLabel);
    view.remove(passwordTextField);
    view.remove(passwordCheckLabel);
    view.remove(passwordCheckTextField);
    view.remove(settingsButton);

    if (signedUp()) {
        usernameTextField.value = Ti.App.Properties.getString('username');
        usernameTextField.setEnabled(false); // Android only
        usernameTextField.setEditable(false);
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
        settingsButton.setTitle('Login');
        if (!signedUp()) {
            view.add(passwordCheckLabel);
            view.add(passwordCheckTextField);
            settingsButton.setTitle('Sign up');
        }
        view.add(settingsButton);
    }

};
