import ApiError from "../api/error/apiError";
import jwt from "jsonwebtoken";
const authMiddleware = (req, res, next) => {
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=");
    if (req.method === "OPTIONS") {
        console.log("vcvcvcvcvcvcvc");
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            console.log("nmnmnmnmmnmmnmnmnmnm");
            throw ApiError.unauthorized("Пользователь не авторизован");
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        console.log("xzxzxzxzxzxzxzxzxx");
        next();
    }
    catch (e) {
        return next(e);
    }
};
export default authMiddleware;
