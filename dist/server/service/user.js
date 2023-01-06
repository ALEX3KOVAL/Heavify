var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ErrorAPI } from "../api/http/HttpAPI";
import { User } from "../models/models";
import bcrypt from "bcrypt";
import { v4 } from "uuid";
import MailService from "./mail";
import TokenService from "./token";
import UserDTO from "../dtos/user";
import { incrementRowsCount } from "../shared_data";
const registration = (userName, email, password, role = "USER") => __awaiter(void 0, void 0, void 0, function* () {
    let message = "";
    if (!email) {
        message += "Некорректный логин\n";
    }
    if (!password) {
        throw ErrorAPI.badRequest(message + "Некорректный пароль");
    }
    const registered = yield User.findOne({ where: { email } });
    if (registered) {
        throw ErrorAPI.conflict("Пользователь с таким логином/паролем уже существует");
    }
    const hashPassword = yield bcrypt.hash(password, 3);
    const activationLink = v4();
    const id = yield incrementRowsCount();
    const user = yield User.create({ id, userName: userName, email: email, role: role, password: hashPassword, activationLink });
    try {
        const mailService = new MailService();
        //@ts-ignore
        yield mailService.sendActivationMessage(email, `${process.env.API_URL}/api/users/activate/${activationLink}`);
        //@ts-ignore
        const userDTO = new UserDTO(user);
        const tokens = yield TokenService.generateTokens(Object.assign({}, userDTO));
        //@ts-ignore
        yield TokenService.saveToken(user.id, tokens.refreshToken);
        return Object.assign(Object.assign({}, tokens), { user: userDTO });
    }
    catch (err) {
        throw err;
    }
});
const activate = (activationLink) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findOne({ where: { activationLink } });
    if (!user) {
        throw ErrorAPI.badRequest("Некорректная ссылка активации");
    }
    //@ts-ignore
    user.isActivated = true;
    yield user.save();
});
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findOne({ where: { email } });
    if (!user) {
        throw ErrorAPI.badRequest("Пользователь с таким email не найден");
    }
    //@ts-ignore
    const isPasswordsEquals = yield bcrypt.compare(password, user.password);
    if (!isPasswordsEquals) {
        throw ErrorAPI.badRequest("Неверный пароль");
    }
    //@ts-ignore
    const userDto = new UserDTO(user);
    const tokens = yield TokenService.generateTokens(Object.assign({}, userDto));
    //@ts-ignore
    yield TokenService.saveToken(user.id, tokens.refreshToken);
    return Object.assign(Object.assign({}, tokens), { user: userDto });
});
const logout = (refreshToken) => __awaiter(void 0, void 0, void 0, function* () { return yield TokenService.removeToken(refreshToken); });
const refresh = (refreshToken) => __awaiter(void 0, void 0, void 0, function* () {
    if (!refreshToken) {
        throw ErrorAPI.badRequest("Укажите обновляющий токен");
    }
    try {
        const userData = yield TokenService.validateRefreshToken(refreshToken);
        yield TokenService.findToken(refreshToken);
        //@ts-ignore
        const freshUserData = yield User.findOne({ where: { id: userData.id } });
        //@ts-ignore
        const userDto = new UserDTO(freshUserData);
        const tokens = yield TokenService.generateTokens(Object.assign({}, userDto));
        //@ts-ignore
        yield TokenService.saveToken(userDto.id, tokens.refreshToken);
        return Object.assign(Object.assign({}, tokens), { user: userDto });
    }
    catch (err) {
        throw ErrorAPI.identify(err);
    }
});
const checkActivated = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (!email) {
        throw ErrorAPI.badRequest("Укажите почту!");
    }
    //@ts-ignore
    const isActivated = yield User.checkIsActivated(email);
    if (isActivated === undefined) {
        throw ErrorAPI.unauthorized("Такой email не зарегистрирован");
    }
    if (!isActivated) {
        throw ErrorAPI.unauthorized("Активируйте свой аккаунт");
    }
    return isActivated;
});
export default {
    registration,
    activate,
    login,
    logout,
    refresh,
    checkActivated
};
//# sourceMappingURL=user.js.map