import ApiError from "../error/apiError";
import { User } from "../../models/models";
import generateJWT from "../../jwt/generateJWT";
import bcrypt from "bcrypt";
export const registration = async (req, res, next) => {
    const { userName, email, password, role } = req.body;
    let message = "";
    if (!email) {
        message += "Некорректный логин\n";
    }
    if (!password) {
        return next(ApiError.badRequest(message + "Некорректный пароль"));
    }
    const registered = await User.findOne({ where: { email } });
    if (registered) {
        return next(ApiError.badRequest("Пользователь с таким email/паролем уже существует"));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ userName: userName, email: email, role: role, password: hashPassword });
    console.log(`userRoleeeeeeee ---- ${user.role}`);
    const token = generateJWT(user.id, user.email, user.role, user.userName);
    return res.json({ token });
};
export const login = async (req, res, next) => {
    const { email, password } = req.body;
    console.log(email);
    const user = await User.findOne({ where: { email } });
    if (!user) {
        return res.status(401).json({ message: "Указан неверный логин" });
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
        return res.status(401).json({ message: "Указан неверный пароль" });
    }
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({ token });
};
export const check = async (req, res, next) => {
    return res.json({ message: "ALL WORKS!" });
};
