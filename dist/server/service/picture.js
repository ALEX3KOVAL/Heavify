import { readdir } from "fs";
import { ErrorAPI } from "../api/http/HttpAPI";
const getPicturesGroupByNames = async (pageName, componentType, res, componentName) => {
    await readdir(`../../assets/images/${pageName}_page/${componentType}/${componentName}`, (err, files) => {
        if (err) {
            throw ErrorAPI.identify(err);
        }
        return res.json({ filesNames: files.sort((a, b) => Number(a.slice(a.lastIndexOf("_") + 1, a.lastIndexOf("."))) > Number(b.slice(b.lastIndexOf("_") + 1, b.lastIndexOf("."))) ? 1 : -1) });
    });
};
const getFoldersNamesBy = async (pageName, componentType, res) => {
    await readdir(`../../assets/images/${pageName}_page/${componentType}/`, (err, foldersNames) => {
        if (err) {
            throw ErrorAPI.identify(err);
        }
        return res.json({ foldersNames: foldersNames });
    });
};
export default {
    getPicturesGroupByNames,
    getFoldersNamesBy
};
