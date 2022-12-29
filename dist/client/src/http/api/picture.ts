import PictureService from "@/services/picture";
import {IPictures} from "@/interfaces/IPictures";

export const getPicturesGroupByNames = async (pageName: string, componentType: string, componentName = ""): Promise<IPictures> => {
    const response = await PictureService.getPicturesGroupByNames(pageName, componentType, componentName);
    return response.data;
}

export const getComponentsNamesBy = async (pageName: string, componentType: string) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%55 ---- ", componentType);
    const response = await PictureService.getComponentsNamesBy(pageName, componentType);
    console.log(response);
    return response.data.componentsNames;
}
