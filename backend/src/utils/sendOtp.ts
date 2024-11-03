import nodemailer from "nodemailer";

const sendOtp = async (email: string) => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "privatething789736@gmail.com",
      pass: "ylpa stve wvnu tsly",
    },
  });

  const otp = Math.floor(Math.random() * 9999);

  const mailOptions = {
    from: "<privatething789736@gmail.com>",
    to: email,
    subject: "Medicare Verification Code",
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          background-color: #f4f4f4;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
        .header {
          background-color: #4CAF50;
          padding: 10px 0;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .header img {
          width: 150px;
        }
        .content {
          padding: 20px;
          text-align: center;
          color: #333;
        }
        .content h1 {
          font-size: 24px;
          color: #4CAF50;
        }
        .message-body {
          margin: 20px 0;
          font-size: 16px;
          line-height: 1.5;
          color: #555;
        }
        .otp-code {
          font-size: 32px;
          font-weight: bold;
          color: #4CAF50;
          margin: 20px 0;
        }
        .footer {
          background-color: #f4f4f4;
          padding: 10px;
          text-align: center;
          font-size: 12px;
          color: #999999;
          border-radius: 0 0 8px 8px;
        }
        .footer a {
          color: #4CAF50;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://via.placeholder.com/150?text=Medicare" alt="Medicare Logo">
        </div>
        <div class="content">
          <h1>${'Medicare verification Code'}</h1>
          <p class="message-body">${'Your verification code is Here, Please use to verify.'}</p>
          <div class="otp-code">${otp}</div>
          <p>This OTP is valid for the next 10 minutes. Please do not share it with anyone.</p>
        </div>
        <div class="footer">
          <p>Need help? Visit our <a href="https://medicare.com/support">Support Center</a>.</p>
          <p>© 2024 Medicare. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `,
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Error is sending the mail", err);
    } else {
      console.log("Email is sent successfully : ", info);
    }
  });

  return otp;
};

export { sendOtp };
