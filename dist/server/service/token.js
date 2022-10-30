import Index from "jsonwebtoken";
import { RefreshToken } from "../models/models";
const generateTokens = async (payload) => {
    const accessToken = Index.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, { expiresIn: process.env.JWT_ACCESS_EXPIRATION });
    const refreshToken = Index.sign(payload, process.env.JWT_REFRESH_SECRET_KEY, { expiresIn: process.env.JWT_REFRESH_EXPIRATION });
    return {
        accessToken,
        refreshToken
    };
};
const saveToken = async (userId, refreshToken) => {
    const tokenData = await RefreshToken.findOne({ where: { userId } });
    if (tokenData) {
        //@ts-ignore
        tokenData.token = refreshToken;
        return tokenData.save();
    }
    console.log("created refreshToken --- ", refreshToken);
    //@ts-ignore
    return await RefreshToken.createToken(userId, refreshToken);
};
export default {
    generateTokens,
    saveToken
};
