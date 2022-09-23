import {Sequelize} from "sequelize";
import {resolve} from "path";
import {config} from "dotenv";
config({ path: resolve() + "/.env" });

const sequelize = new Sequelize(
            process.env.DB_NAME!,
            process.env.DB_USER!,
            process.env.DB_PASSWORD,
            {
                dialect: 'mysql',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT)
            }
        );
export default sequelize;
