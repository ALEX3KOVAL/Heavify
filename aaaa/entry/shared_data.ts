import Promises from "fs/promises";
import {decryptValue, encryptValue} from "../concealment/concealment";

const $_data = {rowsCount: ""};

export const initSharedData = async() => {
    const dataString = (await Promises.readFile("./utils.json")).toString()
    const parsedData = JSON.parse(dataString);
    $_data.rowsCount = parsedData.rowsCount;
}

const _writeToFileSharedData = async() => await Promises.writeFile("./utils.json", JSON.stringify($_data));

export const incrementRowsCount = async (): Promise<string> => {
    let decrypted = decryptValue($_data.rowsCount);
    $_data.rowsCount = encryptValue((Number(decrypted) + 1).toString());
    await _writeToFileSharedData();
    return $_data.rowsCount;
}

export const decrementRowsCount = async (): Promise<string> => {
    let decrypted = decryptValue($_data.rowsCount);
    $_data.rowsCount = encryptValue((Number(decrypted) - 1).toString());
    await _writeToFileSharedData();
    return $_data.rowsCount;
}

export const getRowsCount = () => $_data.rowsCount;

