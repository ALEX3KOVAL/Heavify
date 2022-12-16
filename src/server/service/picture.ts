import {readdir} from "fs";
import {ErrorAPI} from "../api/http/HttpAPI";

const getPicturesGroupByNames = async (pageName: string, componentType: string, res: any, componentName: string) => {
    await readdir(`../../assets/images/${pageName}_page/${componentType}/${componentName ? componentName : ""}`, (err, files) => {
        if (err) {
            throw ErrorAPI.identify(err);
        }
        return res.json(
            {
                filesNames:
                    files.length > 1
                        ?
                        files.sort((a, b) =>
                            Number(a.slice(a.lastIndexOf("_") + 1, a.lastIndexOf("."))) >
                            Number(b.slice(b.lastIndexOf("_") + 1, b.lastIndexOf("."))) ? 1 : -1)
                        :
                        files
            }
        );
    });
};
const getFoldersNamesBy = async (pageName: string, componentType: string, res: any) => {
    await readdir(`../../assets/images/${pageName}_page/${componentType}/`, (err, foldersNames) => {
        if (err) {
            throw ErrorAPI.identify(err);
        }
        return res.json({ componentsNames: foldersNames });
    });
};

export default {
    getPicturesGroupByNames,
    getFoldersNamesBy
}
