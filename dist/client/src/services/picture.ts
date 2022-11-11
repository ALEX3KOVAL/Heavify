//@ts-ignore
import {authHost} from "@/http";
import {AxiosResponse} from "axios";
//@ts-ignore
import {IPictures} from "@/interfaces/IPictures";
//@ts-ignore
import {IComponentsNames} from "@/interfaces/IComponentsNames";

export const getPicturesGroupByNames = async (pageName: string, componentType: string, componentName = ""): Promise<AxiosResponse<IPictures>> =>
    authHost.get<IPictures>(process.env.VUE_APP_PICTURE_POINT + `${pageName}/${componentType}/${componentName}`);

export const getComponentsNamesBy = async (pageName: string, componentType: string): Promise<AxiosResponse<IComponentsNames>> => {
    console.log(`${pageName}/${componentType}`);
    const response = await authHost.get<IComponentsNames>(process.env.VUE_APP_PICTURE_POINT + `${pageName}/${componentType}`);
    console.log(response);
    return response;
}


export default {
    getPicturesGroupByNames,
    getComponentsNamesBy
}
