var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Index from "jsonwebtoken";
import { RefreshToken } from "../models/models";
import { ErrorAPI } from "../api/http/HttpAPI";
const generateTokens = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = Index.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, { expiresIn: process.env.JWT_ACCESS_EXPIRATION });
    const refreshToken = Index.sign(payload, process.env.JWT_REFRESH_SECRET_KEY, { expiresIn: process.env.JWT_REFRESH_EXPIRATION });
    return {
        accessToken,
        refreshToken
    };
});
const saveToken = (userId, refreshToken) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenData = yield RefreshToken.findOne({ where: { userId } });
    if (tokenData) {
        //@ts-ignore
        tokenData.token = refreshToken;
        yield RefreshToken.update({ token: refreshToken }, { where: { userId: userId } });
        return tokenData;
    }
    console.log("created refreshToken --- ", refreshToken);
    //@ts-ignore
    return yield RefreshToken.createToken(userId, refreshToken);
});
const removeToken = (token) => __awaiter(void 0, void 0, void 0, function* () { return yield RefreshToken.destroy({ where: { token } }); });
const validateAccessToken = (accessToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return Index.verify(accessToken, process.env.JWT_ACCESS_SECRET_KEY);
    }
    catch (err) {
        throw ErrorAPI.identify(err);
    }
});
const validateRefreshToken = (refreshToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return Index.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY);
    }
    catch (err) {
        throw ErrorAPI.unauthorized("Обновляющий токен неверен");
    }
});
const findToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield RefreshToken.findOne({ where: { token } }))) {
        throw ErrorAPI.unauthorized("Обновляющий токен не найден");
    }
    return true;
});
export default {
    generateTokens,
    saveToken,
    removeToken,
    validateAccessToken,
    validateRefreshToken,
    findToken
};
//# sourceMappingURL=token.js.map