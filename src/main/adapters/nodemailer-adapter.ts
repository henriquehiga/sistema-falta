import nodemailer from "nodemailer";

export class NodemailerAdapter {
  async enviar(to: string, subject: string, message: string) {
    let transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "dev@daikokurh.com.br",
        pass: "Desenvolv!ment0",
      },
    });

    await transporter.sendMail({
      from: "dev@daikokurh.com.br",
      to,
      subject,
      text: message,
      html: "<b>" + message + "</b>",
    });
  }
}
