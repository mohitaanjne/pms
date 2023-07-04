import nodemailer from 'nodemailer';

export function sendMail(email,password)
{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'aanjne.mohit@gmail.com',
          pass: 'boecwkgulcijgsnr'
        }
      });
      
      var mailOptions = {
        from: 'aanjne.mohit@gmail.com',
        to: email,
        subject: 'Verify Your Account',
        html: '<h1>Welcome To PMS...</h1><p>You are successfully registered to our site, your credentials are attaching below..</p><h2>Email : </h2>'+email+'<h2>Password : </h2>'+password+'<h1>click the link to verify your account</h1><a href="http://localhost:3000/verifyuser/'+email+'">Click Here</a>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          console.log(email);
        } else {
          console.log('Email sent: ' + info.response);
          console.log(email);
        }
      });
}