var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ErrorAPI } from "../http/HttpAPI";
import PictureService from "../../service/picture";
export const PictureController = function () { };
PictureController.getPicturesGroupByNames = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { pageName, componentType, componentName } = req.params;
    if (pageName && componentType) {
        return PictureService.getPicturesGroupByNames(pageName, componentType, res, componentName);
    }
    else {
        return next(ErrorAPI.notImplemented("Необходимо верные задать имя страницы и компонента"));
    }
});
PictureController.getFoldersNamesBy = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { pageName, componentType } = req.params;
    if (pageName && componentType) {
        if (!/^(?!.*header).+$/.test(componentType))
            return next('route');
        return PictureService.getFoldersNamesBy(pageName, componentType, res);
    }
    else {
        return next(ErrorAPI.notImplemented("Необходимо задать верные имя страницы и компонента"));
    }
});
//# sourceMappingURL=pictureController.js.map