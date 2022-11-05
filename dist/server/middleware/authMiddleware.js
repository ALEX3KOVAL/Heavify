import { ErrorAPI } from "../api/http/HttpAPI";
import TokenService from "../service/token";
export const authMiddleware = (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next(ErrorAPI.conflict("Данный HTTP-метод не предусмотрен"));
    }
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
        return next(ErrorAPI.unauthorized("Отсутствует заголовок авторизации"));
    }
    const accessToken = req.headers.authorization.split(' ')[1];
    if (!accessToken) {
        return next(ErrorAPI.badRequest("Укажите токен доступа"));
    }
    try {
        const userData = TokenService.validateAccessToken(accessToken);
        req.user = userData;
        next();
    }
    catch (err) {
        next(err);
    }
};
