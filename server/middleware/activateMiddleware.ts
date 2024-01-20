import UserService from "../service/user";
import {ErrorAPI} from "../api/http/error/ErrorAPI";

export const activateMiddleware = async (req: any, res: any, next: any) => {
    if (req.method === "OPTIONS") {
        return next(ErrorAPI.conflict("Данный HTTP-метод не предусмотрен"));
    }
    try {
        const {email} = req.body;
        await UserService.checkActivated(email);
        next();
    }
    catch (err) { next(err as ErrorAPI); }
};
