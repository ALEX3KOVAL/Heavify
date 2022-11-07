import {authHost} from "@/http";
import {AxiosResponse} from "axios";
import {IPictures} from "@/interfaces/IPictures";

const getPicturesGroupByNames = async (pageName: string, componentType: string, componentName = ""): Promise<AxiosResponse<IPictures>> =>
    authHost.get<IPictures>(process.env.VUE_APP_PICTURE_POINT + `${pageName}/${componentType}/${componentName}`);

export default {
    getPicturesGroupByNames
};
