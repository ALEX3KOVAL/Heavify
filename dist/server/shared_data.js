var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Promises from "fs/promises";
import { decryptValue, encryptValue } from "./concealment/concealment";
const $_data = { rowsCount: "" };
export const initSharedData = () => __awaiter(void 0, void 0, void 0, function* () {
    const dataString = (yield Promises.readFile("./utils.json")).toString();
    const parsedData = JSON.parse(dataString);
    $_data.rowsCount = parsedData.rowsCount;
});
const _writeToFileSharedData = () => __awaiter(void 0, void 0, void 0, function* () { return yield Promises.writeFile("./utils.json", JSON.stringify($_data)); });
export const incrementRowsCount = () => __awaiter(void 0, void 0, void 0, function* () {
    let decrypted = decryptValue($_data.rowsCount);
    $_data.rowsCount = encryptValue((Number(decrypted) + 1).toString());
    yield _writeToFileSharedData();
    return $_data.rowsCount;
});
export const decrementRowsCount = () => __awaiter(void 0, void 0, void 0, function* () {
    let decrypted = decryptValue($_data.rowsCount);
    $_data.rowsCount = encryptValue((Number(decrypted) - 1).toString());
    yield _writeToFileSharedData();
    return $_data.rowsCount;
});
export const getRowsCount = () => $_data.rowsCount;
//# sourceMappingURL=shared_data.js.map