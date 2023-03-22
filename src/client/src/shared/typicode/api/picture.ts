//@ts-ignore
import {authHost} from "./base";
import {AxiosResponse} from "axios";
//@ts-ignore
import {IPictures} from "@/interfaces/IPictures";
//@ts-ignore
import {IComponentsNames} from "@/interfaces/IComponentsNames";

export const getPicturesGroupByNames = async (pageName: string, componentType: string, componentName = ""): Promise<AxiosResponse<IPictures>> =>
    authHost.get<IPictures>(process.env.VUE_APP_PICTURE_POINT + `${pageName}/${componentType}/${componentName}`);

export const getComponentsNamesBy = async (pageName: string, componentType: string): Promise<AxiosResponse<IComponentsNames>> =>
    authHost.get<IComponentsNames>(process.env.VUE_APP_PICTURE_POINT + `${pageName}/${componentType}`);


export default {
    getPicturesGroupByNames,
    getComponentsNamesBy
}
