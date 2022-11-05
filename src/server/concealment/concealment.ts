import * as crypto from "crypto";

const key = crypto.randomBytes(Number(process.env.AES_SECRET_KEY));
const algorithm: string = process.env.ALGORITHM!;
const initVector = crypto.randomBytes(Number(process.env.AES_IV));
const cipher = crypto.createCipheriv(algorithm, key, initVector, {});
const decipher = crypto.createDecipheriv(algorithm, key, initVector);

export const encryptValue = (text: string) => {
    let encryptedData = cipher.update(text, "utf-8", "hex");
    encryptedData += cipher.final("hex");
    return encryptedData;
};

export const decryptValue = (cipherText: string) => {
    let decryptedData = decipher.update(cipherText, "hex", "utf-8");
    decryptedData += decipher.final("utf8");
    return decryptedData;
};
