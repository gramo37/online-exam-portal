var nodemailer = require('nodemailer');

const sendEmail = async (res, email, subject, msg) => {
    var transporter = nodemailer.createTransport({
     service: process.env.SMTP_SERVICE,
     host: process.env.SMPT_HOST,
     port: process.env.SMPT_PORT,
     auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });

    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: email, 
      subject: subject,
      html: `<p>${msg}</p>`
    };

    await transporter.sendMail(mailOptions, function (err, info) {
       if(err) {
           console.log(err)
           return res.status(500).json({
               success: false,
               message: "Mail Not sent",
               error: err 
           })
       }
       else {
        return res.status(200).json({
            success: true,
            message: "Mail Sent Successfully"
        })
       }
    });
}

module.exports = sendEmail;

