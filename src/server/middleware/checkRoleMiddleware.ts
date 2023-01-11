import {ErrorAPI} from "../api/http/HttpAPI";
import jwt from "jsonwebtoken";

export const checkRoleMiddleware = (role: any) => {
    return (req: any, res: any, next: any) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                next(ErrorAPI.badRequest("Укажите токен доступа"));
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY!);
            //@ts-ignore
            console.log(decoded.role);
            //@ts-ignore
            if (decoded.role !== role) {
                next(ErrorAPI.forbidden());
            }
            req.user = decoded;
            next();
        } catch (e) {
            return next(ErrorAPI.identify(e as Error));
        }
    }
};

