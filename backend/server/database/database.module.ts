import { Module, Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';

const provider: Provider = {
    provide: "DATA_SOURCE",
    useFactory: async (): Promise<DataSource> => {
        const dataSource: DataSource = new DataSource({
            type: 'postgres',
            host: process.env.DB_HOST!,
            port: parseInt(process.env.DB_PORT!),
            username: process.env.DB_USERNAME!,
            password: process.env.DB_PASSWORD!,
            database: process.env.DB_NAME!,
            entities: ["dist/storage/entity/*{.ts,.js}"],
            migrations: ["dist/storage/migration/*{.ts,.js}"],
            migrationsRun: true,
            synchronize: false
        })

        return await dataSource.initialize()
    }
}

@Module({
    providers: [provider],
    exports: [provider]
})
export class DatabaseModule {}
