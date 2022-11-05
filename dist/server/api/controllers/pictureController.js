import { ErrorAPI } from "../http/HttpAPI";
import { readdir } from "fs";
const getPicturesGroupByNames = async (req, res, next) => {
    const { pageName, componentType, componentName } = req.params;
    if (pageName && componentType) {
        readdir(`../../assets/images/${pageName}_page/${componentType}/${componentName ? componentName : ""}`, (err, files) => {
            if (err) {
                return next(ErrorAPI.identify(err));
            }
            return res.json({ filesNames: files.sort((a, b) => Number(a.slice(a.lastIndexOf("_") + 1, a.lastIndexOf("."))) > Number(b.slice(b.lastIndexOf("_") + 1, b.lastIndexOf("."))) ? 1 : -1) });
        });
    }
    else {
        return next(ErrorAPI.notImplemented("Необходимо задать имя страницы и компонента"));
    }
};
export default { getPicturesGroupByNames };
