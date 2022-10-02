import ApiError from "../error/apiError";
import {RefreshToken, User} from "../../models/models";
import generateJWT from "../../wt/generateJWT";
import bcrypt from "bcrypt"
import $data from "../../shared_data";

const registration = async (req: any, res: any, next: any) => {
    const {userName, email, password, role} = req.body;
    let message: string = "";
    if (!email) {
        message += "Некорректный логин\n";
    }
    if (!password) {
        return next(ApiError.badRequest(message + "Некорректный пароль"));
    }
    const registered = await User.findOne({where: {email}});
    if (registered) {
        return next(ApiError.conflict("Пользователь с таким логином/паролем уже существует"));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user: any = await User.create({userName: userName, email: email, role: role, password: hashPassword});
    const accessToken = generateJWT({id: user.id});
    //@ts-ignore
    let refreshToken = await RefreshToken.createToken(user.id);
    //@ts-ignore
    $data.refreshToken = refreshToken.token;
    return res.json({accessToken, refreshToken});
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
    const accessToken = generateJWT({id: user.id});
    let refreshToken;
    try {
        //@ts-ignore
        refreshToken = await RefreshToken.createToken(user.id);
    }
    catch(err) {
        refreshToken = await RefreshToken.findOne({where : {userId: user.id}});
    };
    //@ts-ignore
    $data.refreshToken = refreshToken.token;
    return res.json({accessToken, refreshToken});
}

const check = async (req: any, res: any, next: any) => {
    const accessToken = generateJWT({id: req.userId});
    //@ts-ignore
    const {token} = await RefreshToken.findOne({ where: {userId: req.userId}});
    //@ts-ignore
    return res.json({accessToken, "refreshToken": token});
}

export default {
    registration,
    login,
    check
}
