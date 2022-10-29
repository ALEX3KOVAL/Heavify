import path from "node:path";
import dotenv from "dotenv";
dotenv.config({path: path.resolve() + "/.env"});
import {fileURLToPath} from "url";
import express from "express";
import sequelize from "./db";
import cors from "cors";
import router from "./routes/index";
import fileUpload from "express-fileupload";
import {errorHandlingMiddleware} from "./middleware/middlewares";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../../assets/')));
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandlingMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();
