import {ErrorAPI} from "../http/HttpAPI";
import PictureService from "../../service/picture";

const getPicturesGroupByNames = async (req: any, res: any, next: any) => {
    const { pageName, componentType, componentName} = req.params;
    if (pageName && componentType) {
        return PictureService.getPicturesGroupByNames(pageName, componentType, res, componentName);
    }
    else {
        return next(ErrorAPI.notImplemented("Необходимо верные задать имя страницы и компонента"));
    }
};
const getFoldersNamesBy = async (req: any, res: any, next: any) => {
    const { pageName, componentType } = req.params;
    if (pageName && componentType) {
        if (!/^(?!.*header).+$/.test(componentType)) return next('route');
        return PictureService.getFoldersNamesBy(pageName, componentType, res);
    }
    else {
        return next(ErrorAPI.notImplemented("Необходимо задать верные имя страницы и компонента"));
    }
};

export default {
    getPicturesGroupByNames,
    getFoldersNamesBy
};
