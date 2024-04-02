import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [
                "configure/.env.app",
                "server/database/.env.db",
                "server/emailing/.env.emailing"
            ]
        })
    ]
})
export class ConfigureModule {}