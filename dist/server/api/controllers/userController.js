var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ErrorAPI, success } from "../http/HttpAPI";
import UserService from "../../service/user";
import { validationResult } from "express-validator";
export const UserController = function () { };
UserController.registration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ErrorAPI.badRequest("Ошибка при валидации", errors));
        }
        const { userName, email, password, role } = req.body;
        console.log("userName --- ", userName);
        const userData = yield UserService.registration(userName, email, password, role);
        //@ts-ignore
        res.cookie("refreshToken", userData.refreshToken, { maxAge: process.env.JWT_REFRESH_EXPIRATION, httpOnly: true });
        return res.json(userData);
    }
    catch (err) {
        return next(err);
    }
});
UserController.login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const userData = yield UserService.login(email, password);
        res.cookie("refreshToken", userData.refreshToken, { maxAge: process.env.JWT_REFRESH_EXPIRATION, httpOnly: true });
        //@ts-ignore
        return res.json({ user: userData.user, accessToken: userData.accessToken });
    }
    catch (err) {
        return next(err);
    }
});
UserController.activate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activationLink = req.params.link;
        yield UserService.activate(activationLink);
        return res.redirect(process.env.CLIENT_URL);
    }
    catch (err) {
        return next(err);
    }
});
UserController.logout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { refreshToken } = req.cookies;
        yield UserService.logout(refreshToken);
        res.clearCookie('refreshToken');
        return res.status(success.STATUS).json("Выход из профиля прошёл успешно");
    }
    catch (err) {
        return next(err);
    }
});
UserController.refresh = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { refreshToken } = req.cookies;
        const userData = yield UserService.refresh(refreshToken);
        //@ts-ignore
        res.cookie("refreshToken", userData.refreshToken, { maxAge: process.env.JWT_REFRESH_EXPIRATION, httpOnly: true });
        return res.json({ user: userData.user, accessToken: userData.accessToken });
    }
    catch (err) {
        return next(err);
    }
});
//# sourceMappingURL=userController.js.map