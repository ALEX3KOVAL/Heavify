import Index from "crypto-js";

const key = Index.enc.Hex.parse(process.env.AES_SECRET_KEY!);
const iv = Index.enc.Hex.parse(process.env.AES_IV!);

export const encryptValue = (text: string) => {
    let encrypted = Index.AES.encrypt(encryptBeforeAes(text), key, {iv: iv}).toString();
    console.log("encrypted --- ", encrypted);
    return encrypted;
}

export const decryptValue = (cipherText: string) => {
    let decrypted = Index.AES.decrypt(cipherText, key, {iv: iv}).toString();
    decrypted = decryptAfterAes(decrypted);
    console.log("decrypted --- ", decrypted);
    return decrypted;
}

export const encryptBeforeAes = (text: string) => {
    return Array.from(text).map((symbol, index) => String.fromCharCode(symbol.charCodeAt(0) + index & 1 ?
         Math.floor(index * Number(process.env.SECRET_CONSTANT!)) :
        Math.ceil(index * Number(process.env.SECRET_CONSTANT!)))
    ).toString();
}

export const decryptAfterAes = (text: string) => {
    return Array.from(text).map((symbol, index) => String.fromCharCode(symbol.charCodeAt(0) - index & 1 ?
        Math.floor(index * Number(process.env.SECRET_CONSTANT!)) :
        Math.ceil(index * Number(process.env.SECRET_CONSTANT!)))
    ).toString();
}
