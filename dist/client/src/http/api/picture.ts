import PictureService from "@/services/picture";

export const getPicturesGroupByNames = async (pageName: string, componentType: string, componentName = ""): Promise<string[]> => {
    const response = await PictureService.getPicturesGroupByNames(pageName, componentType, componentName);
    return response.data.filesNames;
}

export const getComponentsNamesBy = async (pageName: string, componentType: string) => {
    const response = await PictureService.getComponentsNamesBy(pageName, componentType);
    console.log(response);
    return response.data.componentsNames;
}
