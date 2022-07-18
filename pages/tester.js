var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'adetunjiadeyinka29@gmail.com',
    pass: 'orbetykdwfdwmdsu'
  }
});

var mailOptions = {
  from: 'adetunjiadeyinka29@gmail.com',
  to: 'adetunjidummy@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});