import {authHost} from "@/http";
import {AxiosResponse} from "axios";

const getPicturesGroupByNames = async (pageName: string, componentType: string, componentName = ""): Promise<AxiosResponse<string[]>> =>
    authHost.get<string[]>(process.env.VUE_APP_PICTURE_POINT + `${pageName}/${componentType}/${componentName}`);

export default {
    getPicturesGroupByNames
};
