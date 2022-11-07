import PictureService from "@/services/picture";

const getPicturesGroupByNames = async (pageName: string, componentType: string, componentName = ""): Promise<string[]> => {
    const response = await PictureService.getPicturesGroupByNames(pageName, componentType, componentName);
    return response.data.filesNames;
}
export default getPicturesGroupByNames;
