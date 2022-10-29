import { readdir } from "fs";
import ApiError from "../error/apiError";
const getPicturesGroupByNames = async (req, res, next) => {
    const { pageName, componentName } = req.params;
    if (pageName && componentName) {
        try {
            readdir(`../../assets/images/${pageName}/${componentName}`, (err, files) => {
                if (err) {
                    throw err;
                }
                else {
                    return res.json({ filesNames: files.sort((a, b) => Number(a.slice(a.lastIndexOf("_") + 1, a.lastIndexOf("."))) < Number(b.slice(b.lastIndexOf("_") + 1, b.lastIndexOf("."))) ? -1 : 1) });
                }
            });
        }
        catch (err) {
            next(ApiError.identify(err));
        }
    }
    else {
        next(ApiError.notImplemented("Для получения картинок необходимо указывать страницу и компонент"));
    }
};
export default { getPicturesGroupByNames };
