//Email configuration
Meteor.startup(function () {
  smtp = {
    username: 'test@gmail.com',
    password: 'test123',
    server: 'smtp.gmail.com',
    port: 587
  };
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});