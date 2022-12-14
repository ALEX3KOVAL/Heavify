import * as crypto from "crypto";
const key = crypto.randomBytes(Number(process.env.AES_SECRET_KEY));
const algorithm = process.env.ALGORITHM;
const initVector = crypto.randomBytes(Number(process.env.AES_IV));
const cipher = crypto.createCipheriv(algorithm, key, initVector, {});
const decipher = crypto.createDecipheriv(algorithm, key, initVector);
export const encryptValue = (text) => {
    let encryptedData = cipher.update(text, "utf-8", "hex");
    encryptedData += cipher.final("hex");
    return encryptedData;
};
export const decryptValue = (cipherText) => {
    decipher.setAutoPadding(false);
    let decryptedData = decipher.update(cipherText, "hex", "utf-8");
    decryptedData += decipher.final("utf8");
    return decryptedData;
};
//# sourceMappingURL=concealment.js.map