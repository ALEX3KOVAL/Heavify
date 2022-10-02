import ApiError from "../api/error/apiError";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: any, res: any, next: any) => {
    if (req.method === "OPTIONS") {
        next();
    }
    const {email, password} = req.body;
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        next(ApiError.badRequest("Укажите токен доступа"));
    }
    try {
        req.user = jwt.verify(token, process.env.SECRET_KEY!);
        return next();
    }
    catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
            next();
        }
        else {
            return next(ApiError.identify(err as Error));
        }
    }
};
