import ApiError from "../api/error/apiError";
import {User} from "../models/models";
import bcrypt from "bcrypt";
import {v4} from "uuid";
import MailService from "./mail";
import TokenService from "./token";
import UserDTO from "../dtos/user";
import $data from "../shared_data";
import {encryptValue} from "../concealment/concealment";

const registration = async (userName: string, email: string, password: string, role = "USER") => {
    let message = "";
    if (!email) {
        message += "Некорректный логин\n";
    }
    if (!password) {
        throw ApiError.badRequest(message + "Некорректный пароль");
    }
    const registered = await User.findOne({where: {email}});
    if (registered) {
        throw ApiError.conflict("Пользователь с таким логином/паролем уже существует");
    }
    const hashPassword = await bcrypt.hash(password, 3);
    //const activationLink = v4();
    $data.rowsCount += 1;
    const userId = encryptValue($data.rowsCount.toString());
    const user: any = await User.create({userName: userName, email: email, role: role, password: hashPassword, userId});
    //await MailService.sendActivationMessage(email, activationLink);
    //@ts-ignore
    const userDTO = new UserDTO(user);
    const tokens = await TokenService.generateTokens({...userDTO});
    console.log("tokens --- ", tokens);
    await TokenService.saveToken(user.id, tokens.refreshToken);

    return {...tokens, user: userDTO};
}

export default {registration};
