import ApiError from "../api/error/apiError";
import { RefreshToken } from "../models/models";
import $data from "../shared_data";
export const refreshTokenMiddleware = async (req, res, next) => {
    try {
        //@ts-ignore
        let refreshToken = await RefreshToken.findOne({ where: { token: $data.refreshToken } });
        if (!refreshToken) {
            return next(ApiError.unauthorized("Данный обновляющий токен не существует"));
        }
        //@ts-ignore
        if (RefreshToken.verifyExpiration(refreshToken)) {
            //@ts-ignore
            await RefreshToken.destroy({ where: { userId: refreshToken.userId } });
            //@ts-ignore
            delete $data.refreshToken;
            return next(ApiError.forbidden("Жизненный цикл обновляющего токена закончен, пройдите повторно авторизацию"));
        }
        //@ts-ignore
        req.userId = refreshToken.userId;
        return next();
    }
    catch (err) {
        return next(ApiError.identify(err));
    }
};
