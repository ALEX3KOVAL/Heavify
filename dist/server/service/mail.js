var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createTransport } from "nodemailer";
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
};
MailService.prototype.sendActivationMessage = function (to, link) {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Активация аккаунта на " + "http://localhost:3000",
            text: `Для активации перейдите по ссылке ${link}.\n Если вы не регистрировали аккаунт на heavify.ru - просто проигнорируйте данное письмо.`
        }, (error, info) => {
            if (error) {
                console.log(error.message);
            }
        });
    });
};
export default MailService;
//# sourceMappingURL=mail.js.map