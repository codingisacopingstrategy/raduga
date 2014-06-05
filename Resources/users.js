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

    activityIndicator.show();
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
/* View code */
var activityIndicator = Ti.UI.createActivityIndicator({
    top: 0,
    left: 0,
    height: '10dp',
    width: '10dp'
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
    width: '250dp'
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

var settingsButton = Ti.UI.createButton({
   title: 'Save',
   top: 10,
   width: 100
});

var loginButton = Ti.UI.createButton({
   titleid: 'login',
   top: 10,
   width: 100
});

var logoutButton = Ti.UI.createButton({
   titleid: 'logout',
   top: 10,
   width: 100
});

logoutButton.addEventListener('click', logoutUser);

var signupButton = Ti.UI.createButton({
   titleid: 'signup',
   top: 10,
   width: 100
});


var handleSignup = function() {
    createUser(usernameTextField.value, passwordTextField.value, passwordCheckTextField.value);
};

signupButton.addEventListener('click', handleSignup);

var handleLogin = function() {
    loginUser(usernameTextField.value, passwordTextField.value);
};

loginButton.addEventListener('click', handleLogin);

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
        settingsButton.setTitle('Login');
        if (!signedUp()) {
            view.add(passwordCheckLabel);
            view.add(passwordCheckTextField);
            view.add(signupButton);
        } else {
            view.add(loginButton);
        }
    } else {
        view.add(logoutButton);
    }

};
