// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup({
    activeTabBackgroundColor: '#ed12d1',
    tabsBackgroundColor: '#821785',
});


//
// create base UI tab and root window
//
var predictionWindow = Titanium.UI.createWindow({  
    title: 'Predict',
    backgroundColor: '#000'
});
var predictionTab = Titanium.UI.createTab({  
    icon: 'KS_nav_views.png',
    title: 'Predict',
    window: predictionWindow,
});

var predictionLabel = Titanium.UI.createLabel({
    color: '#821785',
    text: 'Prediction Window',
    font: {
        fontSize: 20,
    },
    textAlign: 'center',
    width: 'auto',
});

predictionWindow.add(predictionLabel);

//
// create controls tab and root window
//
var shareWindow = Titanium.UI.createWindow({  
    title: 'Tab 2',
    backgroundColor: '#000'
});
var shareTab = Titanium.UI.createTab({
    icon: 'KS_nav_ui.png',
    title: 'Share',
    window: shareWindow,
});

var mapWebView = Titanium.UI.createWebView({url:'html/index.html'});

shareWindow.add(mapWebView);

//  add tabs
tabGroup.addTab(predictionTab);  
tabGroup.addTab(shareTab);

// open tab group
tabGroup.open();
