import {Sequelize} from "sequelize";
import {resolve} from "path";
import {config} from "dotenv";
config({ path: resolve() + "/db.env" });

export const sequelizeClient = new Sequelize(
            process.env.DB_NAME!,
            process.env.DB_USER!,
            process.env.DB_PASSWORD!,
            {
                dialect: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT)
            }
        );