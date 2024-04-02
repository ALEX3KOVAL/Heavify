import {Module} from "@nestjs/common";
import {EmailingService} from "./emailing.service";
import {MailerModule} from "@nestjs-modules/mailer";
import * as process from "process";

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: process.env.TP_HOST,
                port: parseInt(process.env.TP_PORT!),
                secure: true,
                auth: {
                    user: process.env.TP_USER,
                    pass: process.env.TP_PASS
                }
            },
            defaults: {
                from: '"No Reply" <koval3nich@yandex.ru>'
            }
        })
    ],
    providers: [EmailingService],
    exports: [EmailingService]
})
export class EmailingModule {}
