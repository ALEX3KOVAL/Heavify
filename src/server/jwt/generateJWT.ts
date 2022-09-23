import jwt from "jsonwebtoken";

const generateJWT = (id: any, email: any, role: any, userName?: string) => {
    return jwt.sign(
        {id, userName, email, role},
        process.env.SECRET_KEY!,
        {expiresIn: '12h'});
};

export default generateJWT;
