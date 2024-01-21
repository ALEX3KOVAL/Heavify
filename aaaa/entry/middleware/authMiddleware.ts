import {ErrorAPI} from "../../api/http/HttpAPI";
import TokenService from "../../service/token";

export const authMiddleware = (req: any, res: any, next: any) => {
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
        req.user = TokenService.validateAccessToken(accessToken);
        next();
    }
    catch (err) { next(err as ErrorAPI); }
};
