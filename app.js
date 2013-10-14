var config = require("./config");
var redis = require('redis').createClient(config.redis.port, config.redis.host);
var mailer = require('nodemailer');
var transport = mailer.createTransport(config.mailer.type, config.mailer.options);

redis.on('connect', function () {
  console.log('redis connected');

  redis.on("message", function (channel, message) {
    console.log(channel, ' got message: ', message)
    sendMail(message);
  });

  redis.subscribe(config.redis.channel);
});

function sendMail(message) {
  try {
    var m = JSON.parse(message);
  } catch (e) {
    console.log("Failed to parse message:", message);
    return;
  }

  transport.sendMail({
    from: m.from,
    to: m.to,
    subject: m.subject,
    html: m.html
  }, function (err, res) {
    if (err) {
      console.log('error:', err);
    } else {
      console.log('success:',res);
    }
  });
}
