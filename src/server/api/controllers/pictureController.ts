import ApiError from "../error/apiError";
import {readdir} from "fs";

const getPicturesGroupByNames = async (req: any, res: any, next: any) => {
    const {pageName, componentName} = req.params;
    if (pageName && componentName) {
        readdir(`../../assets/images/${pageName}/${componentName}`, (err, files) => {
            if (err) {
                return next(ApiError.identify(err));
            }
            return res.json({filesNames: files.sort((a, b) => Number(a.slice(a.lastIndexOf("_") + 1, a.lastIndexOf("."))) > Number(b.slice(b.lastIndexOf("_") + 1, b.lastIndexOf("."))) ? 1 : -1 )});
        });
    }
    else {
        return next(ApiError.notImplemented("Необходимо задать имя страницы и компонента"));
    }
}

export default { getPicturesGroupByNames };
