import {Injectable} from "@nestjs/common";
import {MailerService} from "@nestjs-modules/mailer";
import {SentMessageInfo} from "nodemailer";
import {Result} from "../../domain/extensions/result.extension";
import {ConfigService} from "@nestjs/config";
import {Email} from "../auth/common/vo/email";

@Injectable()
export class EmailingService {
    constructor(
        private readonly mailerService: MailerService,
        private readonly configService: ConfigService
    ) {}

    send = async (toAddress: string, subject: string, text: string): Promise<Result<SentMessageInfo>> =>
        Result.asyncRunCatching(() =>
            this.mailerService.sendMail({
                to: toAddress,
                subject: subject,
                text: text
            })
        )

    sendActivationMail = (toAddress: Email, link: string): Promise<Result<SentMessageInfo>> =>
        Result.asyncRunCatching(async () =>
            this.mailerService.sendMail({
                to: toAddress.value,
                subject: `Активация аккаунта на ${this.configService.get<string>("APP_NAME")}`,
                html:
                    `
                        <div>
                            <h1>Для активации перейдите по ссылке</h1>
                            <a href="${link}">${link}</a>
                        </div>
                    `
            })
        )
}