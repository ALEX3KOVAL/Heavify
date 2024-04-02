import {Injectable} from "@nestjs/common";
import {MailerService} from "@nestjs-modules/mailer";
import {SentMessageInfo} from "nodemailer";

@Injectable()
export class EmailingService {
    constructor(private readonly mailerService: MailerService) {}

    send = async (toAddress: string, subject: string, text: string): Promise<SentMessageInfo> =>
        await this.mailerService.sendMail({
            to: toAddress,
            from: "koval3nich@yandex.ru",
            subject: subject,
            text: text
        })
}