import ApiError from "../api/error/apiError";
import jwt from "jsonwebtoken";

const checkRoleMiddleware = (role: any) => {
    return (req: any, res: any, next: any) => {
        console.log("()()()()()()()(((((((((((((((((");
        if (req.method === "OPTIONS") {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                console.log("lllllllllll");
                throw ApiError.unauthorized("Пользователь не авторизован");
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY!);
            //@ts-ignore
            console.log(decoded.role);
            //@ts-ignore
            if (decoded.role !== role) {
                //@ts-ignore
                console.log(`zxzxxxxxxxxxxxxxxxxxxxxxxxxxxxx ---- ${decoded.role}`);
                throw ApiError.forbidden("Недостаточно прав");
            }
            req.user = decoded;
            next();
        } catch (e) {
            return next(e);
        }
    }
}

export default checkRoleMiddleware;
