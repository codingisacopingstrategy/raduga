// Settings Form

var topPadding = Titanium.UI.createView({
    width: '100%',
    height: '20dp'
});
var usernameLabel = Titanium.UI.createLabel({
    color: '#821785',
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
    color: '#821785',
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
    color: '#821785',
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

var notificationsLabel = Titanium.UI.createLabel({
    color: '#821785',
    text: 'City:',
    top: 10, left: 10,
    width: 250
});

var notificationsSwitch = Ti.UI.createSwitch({
    value:true,
    top: 10, left: 10,
});

var settingsButton = Titanium.UI.createButton({
   title: 'Save',
   top: 10,
   width: 100
});

var signedUp = function() {
   return Boolean(Ti.App.Properties.getString('username'));
};
var loggedIn = function() {
    return Boolean(Ti.App.Properties.getString('sessionID'));
};

settingsWindow.add(topPadding);

if (signedUp()) {
    usernameTextField.value = Ti.App.Properties.getString('username');
    usernameTextField.setEnabled(false); // Android only
    usernameTextField.setEditable(false);
}

settingsWindow.add(usernameLabel);
settingsWindow.add(usernameTextField);
if (!loggedIn()) {
    // We are not logged in. Add the pas
    settingsWindow.add(passwordLabel);
    settingsWindow.add(passwordTextField);
    settingsButton.setTitle('Login');
    if (!signedUp()) {
        settingsWindow.add(passwordCheckLabel);
        settingsWindow.add(passwordCheckTextField);
        settingsButton.setTitle('Sign up');
    }
}

settingsWindow.add(notificationsLabel);
settingsWindow.add(notificationsSwitch);
settingsWindow.add(settingsButton);
settingsButton.addEventListener('click',function(e) {
   if (!signedUp()) {
       createUser(usernameTextField.value, passwordTextField.value, passwordCheckTextField.value);
   }
});
