var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sfshahama145@gmail.com',
    pass: '985231710v'
  }
});

var mailOptions = {
  from: 'sfshahama145@gmail.com',
  to: 'info@uki.life',
  subject: 'Testing my nodemailer module',
  text: 'This is easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
