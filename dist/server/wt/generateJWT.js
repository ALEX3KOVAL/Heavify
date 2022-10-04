import jwt from "jsonwebtoken";
const generateJWT = (data) => {
    return jwt.sign(data, process.env.SECRET_KEY, { expiresIn: '12h' });
};
export default generateJWT;
