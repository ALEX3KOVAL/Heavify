import jwt from "jsonwebtoken";
const generateJWT = (id, email, role, userName) => {
    return jwt.sign({ id, userName, email, role }, process.env.SECRET_KEY, { expiresIn: '12h' });
};
export default generateJWT;
