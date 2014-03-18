// Cities Selection

var citiesWindow = Ti.UI.createWindow({
    modal: true
});

var tableData = [];

var cityNameField = Titanium.Locale.currentLanguage === 'ru' ? 'name_ru' : 'name_en';
for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    tableData.push({ title: city[cityNameField], val: city });
}

var citiesSearch = Titanium.UI.createSearchBar({
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
citiesTable.addEventListener('click', function(e) {
    cityTextField.value = e.rowData.title;
    citiesWindow.close();
});

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
    text: 'Notifications:',
    top: 10, left: 10,
    width: 250
});

var notificationsSwitch = Ti.UI.createSwitch({
    value:true,
    top: 10, left: 10,
});

var cityLabel = Titanium.UI.createLabel({
    color: '#821785',
    text: 'City:',
    top: 10, left: 10,
    width: 250
});

var cityTextField = Ti.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: 10, left: 10,
    width: 250
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

var settingsScrollView = Ti.UI.createScrollView({
   contentWidth:'auto',
   contentHeight:'auto',
   top:0,
   layout: 'vertical',
   showVerticalScrollIndicator:true,
   showHorizontalScrollIndicator:true
});

settingsWindow.add(topPadding);
settingsWindow.add(settingsScrollView);

if (signedUp()) {
    usernameTextField.value = Ti.App.Properties.getString('username');
    usernameTextField.setEnabled(false); // Android only
    usernameTextField.setEditable(false);
}

settingsScrollView.add(usernameLabel);
settingsScrollView.add(usernameTextField);
if (!loggedIn()) {
    // We are not logged in. Add the pas
    settingsScrollView.add(passwordLabel);
    settingsScrollView.add(passwordTextField);
    settingsButton.setTitle('Login');
    if (!signedUp()) {
        settingsScrollView.add(passwordCheckLabel);
        settingsScrollView.add(passwordCheckTextField);
        settingsButton.setTitle('Sign up');
    }
}

settingsScrollView.add(cityLabel);
settingsScrollView.add(cityTextField);
settingsScrollView.add(notificationsLabel);
settingsScrollView.add(notificationsSwitch);
settingsScrollView.add(settingsButton);

//
// Behaviour
//
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
settingsButton.addEventListener('click', function(e) {
   if (!signedUp()) {
       createUser(usernameTextField.value, passwordTextField.value, passwordCheckTextField.value);
   }
});
cityTextField.addEventListener('focus', function(e) {
    cityTextField.blur();
    citiesWindow.open();
});
