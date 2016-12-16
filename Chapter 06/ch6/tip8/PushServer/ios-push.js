var apn = require('apn'),
    process = require('process');

var options = {
    production : false
};

var token = 'YOUR_TOKEN_HERE';

var apnConnection = new apn.Connection(options);

var device = new apn.Device(token);

var notification = new apn.Notification();
notification.alert = 'Thanks for reading React Native Cookbook!';

apnConnection.pushNotification(notification, device);

apnConnection.shutdown();
