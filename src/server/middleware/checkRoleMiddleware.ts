import ApiError from "../api/error/apiError";
import jwt from "jsonwebtoken";

export const checkRoleMiddleware = (role: any) => {
    return (req: any, res: any, next: any) => {
        console.log("()()()()()()()(((((((((((((((((");
        if (req.method === "OPTIONS") {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                console.log("lllllllllll");
                next(ApiError.badRequest("Укажите токен доступа"));
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY!);
            //@ts-ignore
            console.log(decoded.role);
            //@ts-ignore
            if (decoded.role !== role) {
                next(ApiError.forbidden());
            }
            req.user = decoded;
            next();
        } catch (e) {
            return next(ApiError.identify(e as Error));
        }
    }
};

