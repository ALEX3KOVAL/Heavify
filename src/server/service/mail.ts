import {createTransport} from "nodemailer";

/*********
 Здесь позже будет синглтон
**********/

const MailService = function () {
    this.transporter = createTransport({
        //@ts-ignore
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        },
        from: process.env.SMTP_USER
    });
}

MailService.prototype.sendActivationMessage = async function(to: any, link: any) {
    await this.transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: "Активация аккаунта на " + "http://localhost:3000",
        text: `Для активации перейдите по ссылке ${link}.\n Если вы не регистрировали аккаунт на heavify.ru - просто проигнорируйте данное письмо.`
    }, (error: Error, info: any) => {
        if (error) {
            console.log(error.message);
        }
    });
}
export default MailService;
