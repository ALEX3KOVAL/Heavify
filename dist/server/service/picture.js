var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { readdir } from "fs";
import { ErrorAPI } from "../api/http/HttpAPI";
const getPicturesGroupByNames = (pageName, componentType, res, componentName) => __awaiter(void 0, void 0, void 0, function* () {
    let filesNamesObject = { filesNames: [""] };
    yield readdir(`../../assets/images/${pageName}_page/${componentType}/${componentName ? componentName : ""}`, (err, files) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            throw ErrorAPI.identify(err);
        }
        console.log(files);
        filesNamesObject.filesNames =
            (files.length > 2
                ?
                    files
                        .sort((a, b) => Number(a.slice(a.lastIndexOf("_") + 1, a.lastIndexOf("."))) >
                        Number(b.slice(b.lastIndexOf("_") + 1, b.lastIndexOf("."))) ? 1 : -1)
                :
                    files).filter(value => value !== "clay");
        if (componentType === "carousel") {
            yield readdir(`../../assets/images/${pageName}_page/${componentType}/${componentName}/clay`, (err, files) => {
                if (err) {
                    throw ErrorAPI.identify(err);
                }
                //@ts-ignore
                filesNamesObject.clay = files[0];
                return res.json(filesNamesObject);
            });
        }
        else {
            return res.json(filesNamesObject.filesNames[0]);
        }
    }));
});
const getFoldersNamesBy = (pageName, componentType, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield readdir(`../../assets/images/${pageName}_page/${componentType}/`, (err, foldersNames) => {
        if (err) {
            throw ErrorAPI.identify(err);
        }
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ---- ", foldersNames);
        return res.json({ componentsNames: foldersNames });
    });
});
export default {
    getPicturesGroupByNames,
    getFoldersNamesBy
};
//# sourceMappingURL=picture.js.map