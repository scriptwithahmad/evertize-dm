import nodemailer from "nodemailer";

async function sendMail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "scripthwithahmad@gmail.com",
      pass: "Ahmad@333@G",
    },
  });

  const mailOptions = {
    from: "scripthwithahmad@gmail.com",
    to: email,
    subject: "no-reply",
    text: message,
  };

  console.log(mailOptions);

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error(error);
  }
}

export default sendMail;
