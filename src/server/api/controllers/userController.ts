import {ErrorAPI, success} from "../http/HttpAPI";
import UserService from "../../service/user";
import {validationResult} from "express-validator";

const registration = async (req: any, res: any, next: any) => {
    try {
        const errors: any = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ErrorAPI.badRequest("Ошибка при валидации", errors));
        }
        const {userName, email, password, role} = req.body;
        console.log("userName --- ", userName);
        const userData = await UserService.registration(userName, email, password, role);
        //@ts-ignore
        res.cookie("refreshToken", userData.refreshToken, {maxAge: process.env.JWT_REFRESH_EXPIRATION, httpOnly: true});
        return res.json(userData);
    }
    catch(err) { return next(err) }
}

const login = async (req: any, res: any, next: any) => {
    try {
        const { email, password } = req.body;
        const userData = await UserService.login(email, password);
        res.cookie("refreshToken", userData.refreshToken, { maxAge: process.env.JWT_REFRESH_EXPIRATION, httpOnly: true });
        //@ts-ignore
        return res.json({user: userData.user, accessToken: userData.accessToken});
    }
    catch (err) {
        return next(err);
    }
}

const activate = async (req: any, res: any, next: any) => {
    try {
        const activationLink = req.params.link;
        await UserService.activate(activationLink);
        return res.redirect(process.env.CLIENT_URL);
    }
    catch (err) { return next(err as ErrorAPI); }
}

const logout = async (req: any, res: any, next: any) => {
    try {
        const {refreshToken} = req.cookies;
        await UserService.logout(refreshToken);
        res.clearCookie('refreshToken');
        return res.status(success.STATUS).json("Выход из профиля прошёл успешно");
    }
    catch(err) { return next(err); }
}

const refresh = async (req: any, res: any, next: any) => {
    try {
        const {refreshToken} = req.cookies;
        const userData = await UserService.refresh(refreshToken);
        //@ts-ignore
        res.cookie("refreshToken", userData.refreshToken, {maxAge: process.env.JWT_REFRESH_EXPIRATION, httpOnly: true});
        return res.json(userData);
    }
    catch(err) { return next(err); }
}

export default {
    registration,
    login,
    activate,
    logout,
    refresh
}
