var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import path from "node:path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve() + "/.env" });
import express from "express";
import { sequelizeClient } from "./db";
import cors from "cors";
import { router } from "./routes/index";
import fileUpload from "express-fileupload";
import { errorHandlingMiddleware } from "./middleware/middlewares";
import Index from "cookie-parser";
import { initSharedData } from "./shared_data";
const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(express.json());
app.use(Index());
app.use(express.static(path.resolve(path.resolve(), '../../assets', 'images')));
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandlingMiddleware);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelizeClient.authenticate();
        yield sequelizeClient.sync();
        yield initSharedData();
        app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
    }
    catch (e) {
        console.log(e);
    }
});
start();
