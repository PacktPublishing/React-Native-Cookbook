var gcm = require('node-gcm');

var message = new gcm.Message();

message.addNotification({
    title : 'Notification',
    body : 'Thanks for reading React Native Cookbook!',
    icon : 'ic_launcher',
    click_action : 'OPEN_ACTIVITY_1'
});

// Set up the sender with you API key, prepare your recipients' registration tokens.
var sender = new gcm.Sender('YOUR_ID_HERE');
var regTokens = ['YOUR_TOKEN_HERE'];

sender.send(message, { registrationTokens: regTokens }, function (err, response) {
    if(err) console.error(err);
    else    console.log(response);
});