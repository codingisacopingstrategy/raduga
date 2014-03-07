
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
            alert('Success:\n' +
                'id: ' + user.id + '\n' +
                'sessionId: ' + Cloud.sessionId + '\n' +
                'username: ' + user.username );
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
};


var loginUser = function(password) {
    var username = Ti.App.Properties.getString('username');
    Cloud.Users.login({
        username: username,
        password: password
    }, function (e) {
        if (e.success) {
            Raduga.user = e.users[0];
            var user = Raduga.user;
            Ti.App.Properties.setString('sessionID', Cloud.sessionId);
            Ti.App.Properties.setString('username', user.username);
            alert('Success:\n' +
                'id: ' + user.id + '\n' +
                'sessionId: ' + Cloud.sessionId + '\n' +
                'username: ' + user.username );
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
};
