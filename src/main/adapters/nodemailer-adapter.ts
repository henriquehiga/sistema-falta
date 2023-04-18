import nodemailer from "nodemailer"

export class NodemailerAdapter {
    async enviar(to: string, subject: string, message: string) {
        let transporter = nodemailer.createTransport({
            host: "smtp@hostinger.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: "desenvolvimento@daikokurh.com.br", // generated ethereal user
              pass: "Desenvolv1ment0", // generated ethereal password
            },
          });
        
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: 'desenvolvimento@daikokurh.com.br', // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            text: message, // plain text body
            html: "<b>"+message+"</b>", // html body
          });
    }
}