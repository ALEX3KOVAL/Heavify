import ApiError from "../api/error/apiError";
import jwt from "jsonwebtoken";
export const authMiddleware = (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next(ApiError.conflict("Данный HTTP-метод не предусмотрен"));
    }
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return next(ApiError.badRequest("Укажите токен доступа"));
    }
    try {
        req.user = jwt.verify(token, process.env.SECRET_KEY);
        if (req.user.id === req.userId) {
            delete req.userId;
        }
        else {
            return next(ApiError.forbidden("Возникло несоответствие между ключами, пройдите повторно авторизацию"));
        }
        return next();
    }
    catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
            return next();
        }
        else {
            return next(ApiError.identify(err));
        }
    }
};
