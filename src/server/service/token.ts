import Index from "jsonwebtoken";
import {RefreshToken} from "../models/models";
import {ErrorAPI} from "../api/http/HttpAPI";

const generateTokens = async (payload: any) => {
    const accessToken = Index.sign(payload, process.env.JWT_ACCESS_SECRET_KEY!, {expiresIn: process.env.JWT_ACCESS_EXPIRATION});
    const refreshToken = Index.sign(payload, process.env.JWT_REFRESH_SECRET_KEY!, {expiresIn: process.env.JWT_REFRESH_EXPIRATION});
    return {
        accessToken,
        refreshToken
    };
}

const saveToken = async (userId: any, refreshToken: any) => {
    const tokenData = await RefreshToken.findOne({where: {userId}});
    if (tokenData) {
        //@ts-ignore
        tokenData.token = refreshToken;
        return tokenData.save();
    }
    console.log("created refreshToken --- ", refreshToken);
    //@ts-ignore
    return await RefreshToken.createToken(userId, refreshToken);
}

const removeToken = async (token: string) => await RefreshToken.destroy({where: {token}});

const validateAccessToken = async (accessToken: string) => {
    try {
        return Index.verify(accessToken, process.env.JWT_ACCESS_SECRET_KEY!);
    }
    catch(err) { throw ErrorAPI.identify(err as Error) }
}

const validateRefreshToken = async (refreshToken: string) => {
    try {
        return Index.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY!);
    }
    catch(err) { throw ErrorAPI.unauthorized("Обновляющий токен неверен");}
}

const findToken = async (token: string) => {
    if (!(await RefreshToken.findOne({where: {token}}))) {
        throw ErrorAPI.unauthorized("Обновляющий токен не найден");
    }
    return true;
}

export default {
    generateTokens,
    saveToken,
    removeToken,
    validateAccessToken,
    validateRefreshToken,
    findToken
};
