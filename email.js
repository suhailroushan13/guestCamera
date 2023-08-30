import nodemailer from "nodemailer";
import config from "config";

let sendMail = async (emailData, attachmentPath, attachmentFilename) => {
  const HOST = config.get("EMAIL_SMTP.HOST");
  const AUTH = config.get("EMAIL_SMTP.AUTH");
  const PORT = config.get("EMAIL_SMTP.PORT");

  try {
    let transporter = nodemailer.createTransport({
      host: HOST,
      port: PORT,
      secure: true,
      auth: {
        user: AUTH.USER,
        pass: AUTH.PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"From Suhail Roushan" <${AUTH["USER"]}>`,
      subject: emailData.subject,
      to: emailData.to,
      html: emailData.body,
      attachments: [
        {
          filename: attachmentFilename,
          path: attachmentPath,
        },
      ],
    });

    console.log("Email sent");
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error);
  }
};

export default sendMail
