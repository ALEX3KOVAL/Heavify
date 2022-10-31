import ApiError from "../error/apiError";
import {RefreshToken, User} from "../../models/models";
import bcrypt from "bcrypt"
import $data from "../../shared_data";
import UserService from "../../service/user";

const registration = async (req: any, res: any, next: any) => {
    try {
        const {userName, email, password, role} = req.body;
        console.log("userName --- ", userName);
        const userData = await UserService.registration(userName, email, password, role);
        res.cookie("refreshToken", userData.refreshToken, {maxAge: process.env.JWT_REFRESH_EXPIRATION, httpOnly: true});
        return res.json(userData);
    }
    catch(err) { return next(err as ApiError) }
}

const login = async (req: any, res: any, next: any) => {
    const {email, password} = req.body;
    const user: any = await User.findOne({where: {email}});
    if (!user) {
        return next(ApiError.unauthorized("Указан неверный логин"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
        return next(ApiError.unauthorized("Указан неверный пароль"));
    }
    let refreshToken;
    refreshToken = await RefreshToken.findOne({where : {userId: user.id}});
    if (!refreshToken) {
        //@ts-ignore
        refreshToken = await RefreshToken.createToken(user.id);
        //@ts-ignore
        delete $data.refreshToken;
        //@ts-ignore
        $data.refreshToken = refreshToken.token;
    }
    return res.json();
}

const issueNewJWT = async (req: any, res: any, next: any) => {
    //@ts-ignore
    return res.json();
}

export default {
    registration,
    login,
    issueNewJWT
}
