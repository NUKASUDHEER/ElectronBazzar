const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'chandrashe788@gmail.com',
      pass: 'qmzbdwblhhqkhxpe',
    },
  });

  const mailOptions = {
    from: 'test13072001@yahoo.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
