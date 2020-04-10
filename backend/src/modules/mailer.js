const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');

const { host, port, user, pass } = require('../config/mail.json');

const transport = nodemailer.createTransport({
      host,
      port,
      auth: { user, pass },
});

transport.use('compile', hbs({
   viewEngine: {
      extName: '.html',
      partialsDir: path.resolve('./src/resource/mail/'),
      layoutsDir: path.resolve('./src/resource/mail/'),
      defaultLayout: 'auth/forgot_password.html',
   },
   viewPath: path.resolve('./src/resource/mail/'),
   extName: '.html',
}));

module.exports = transport;
