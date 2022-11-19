import {ErrorAPI} from "../api/http/HttpAPI";
import {User} from "../models/models";
import bcrypt from "bcrypt";
import {v4} from "uuid";
import MailService from "./mail";
import TokenService from "./token";
import UserDTO from "../dtos/user";
import {incrementRowsCount} from "../shared_data";

const registration = async (userName: string, email: string, password: string, role = "USER") => {
    let message = "";
    if (!email) {
        message += "Некорректный логин\n";
    }
    if (!password) {
        throw ErrorAPI.badRequest(message + "Некорректный пароль");
    }
    const registered = await User.findOne({where: {email}});
    if (registered) {
        throw ErrorAPI.conflict("Пользователь с таким логином/паролем уже существует");
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = v4();
    const id = await incrementRowsCount();
    const user = await User.create({ id, userName: userName, email: email, role: role, password: hashPassword, activationLink });
    try {
        const mailService = new (MailService as any)();
        //@ts-ignore
        await mailService.sendActivationMessage(email, `${process.env.API_URL}/api/users/activate/${activationLink}`);
        //@ts-ignore
        const userDTO = new UserDTO(user);
        const tokens = await TokenService.generateTokens({ ...userDTO });
        //@ts-ignore
        await TokenService.saveToken(user.id, tokens.refreshToken);
        return { ...tokens, user: userDTO };
    }
    catch(err) { throw err; }
}

const activate = async (activationLink: any) => {
    const user = await User.findOne({ where: { activationLink } });
    if (!user) {
        throw ErrorAPI.badRequest("Некорректная ссылка активации");
    }
    //@ts-ignore
    user.isActivated = true;
    await user.save();
}

const login = async (email: string, password: string) => {
    const user = await User.findOne({where: {email}});
    if (!user) {
        throw ErrorAPI.badRequest("Пользователь с таким email не найден");
    }
    //@ts-ignore
    const isPasswordsEquals: boolean = await bcrypt.compare(password, user.password);
    if (!isPasswordsEquals) {
        throw ErrorAPI.badRequest("Неверный пароль");
    }
    //@ts-ignore
    const userDto = new UserDTO(user);
    const tokens = TokenService.generateTokens({...userDto});
    //@ts-ignore
    await TokenService.saveToken(user.id, tokens.refreshToken);
    return {...tokens, user: userDto};
}

const logout = async (refreshToken: string) => await TokenService.removeToken(refreshToken);

const refresh = async (refreshToken: string) => {
    if (!refreshToken) {
        throw ErrorAPI.unauthorized("Укажите обновляющий токен");
    }
    try {
        const userData = await TokenService.validateRefreshToken(refreshToken);
        await TokenService.findToken(refreshToken);
        //@ts-ignore
        const freshUserData = await User.findOne({where: {id: userData.id}});
        //@ts-ignore
        const userDto = new UserDTO(freshUserData);
        const tokens = TokenService.generateTokens(userDto);
        //@ts-ignore
        await TokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto};
    }
    catch (err) {  }
}

export default {
    registration,
    activate,
    login,
    logout,
    refresh
}
