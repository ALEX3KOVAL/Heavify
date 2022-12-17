import { readdir } from "fs";
import { ErrorAPI } from "../api/http/HttpAPI";
const getPicturesGroupByNames = async (pageName, componentType, res, componentName) => {
    let filesNamesObject = { filesNames: [""] };
    await readdir(`../../assets/images/${pageName}_page/${componentType}/${componentName ? componentName : ""}`, async (err, files) => {
        if (err) {
            throw ErrorAPI.identify(err);
        }
        filesNamesObject.filesNames =
            (files.length > 2
                ?
                    files
                        .sort((a, b) => Number(a.slice(a.lastIndexOf("_") + 1, a.lastIndexOf("."))) >
                        Number(b.slice(b.lastIndexOf("_") + 1, b.lastIndexOf("."))) ? 1 : -1)
                :
                    files).filter(value => value !== "clay");
        if (componentType === "carousel") {
            await readdir(`../../assets/images/${pageName}_page/${componentType}/${componentName}/clay`, (err, files) => {
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

    });
};
const getFoldersNamesBy = async (pageName, componentType, res) => {
    await readdir(`../../assets/images/${pageName}_page/${componentType}/`, (err, foldersNames) => {
        if (err) {
            throw ErrorAPI.identify(err);
        }
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ---- ",foldersNames);
        return res.json({ componentsNames: foldersNames });
    });
};
export default {
    getPicturesGroupByNames,
    getFoldersNamesBy
};
