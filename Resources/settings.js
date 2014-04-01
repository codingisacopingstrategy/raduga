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
citiesSearch.addEventListener('cancel', function(e) {
    citiesWindow.close();
});

// Settings Form

var topPadding = Titanium.UI.createView({
    width: '100%',
    height: '20dp'
});

var userDialog = Titanium.UI.createView({
   top:0,
   height: Ti.UI.SIZE,
   layout: 'vertical',
});

updateUserDialog(userDialog);

var notificationsLabel = Titanium.UI.createLabel({
    color: 'white',
    text: 'Notifications:',
    top: 10, left: 10,
    width: 250
});

var notificationsSwitch = Ti.UI.createSwitch({
    value: Ti.App.Properties.getString('notifications') !== 'false',
    top: 10, left: 10,
});

var cityLabel = Titanium.UI.createLabel({
    color: 'white',
    text: 'City:',
    top: 10, left: 10,
    width: 250
});

var cityTextField = Ti.UI.createTextField({
    value: Ti.App.Properties.getString(Titanium.Locale.currentLanguage === 'ru' ? 'city_name_ru' : 'city_name_en'),
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: 10, left: 10,
    width: 250
});


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

settingsScrollView.add(userDialog);
settingsScrollView.add(cityLabel);
settingsScrollView.add(cityTextField);
settingsScrollView.add(notificationsLabel);
settingsScrollView.add(notificationsSwitch);

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
});
notificationsSwitch.addEventListener('change', function() {
    Ti.App.Properties.setString('notifications', String(notificationsSwitch.value));
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

// handle settings refresh
settingsWindow.addEventListener('user_status_change', function() {
    updateUserDialog(userDialog);
});
