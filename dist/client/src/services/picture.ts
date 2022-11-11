import {authHost} from "@/http";
import {AxiosResponse} from "axios";
import {IPictures} from "@/interfaces/IPictures";
import {IComponentsNames} from "@/interfaces/IComponentsNames";

export const getPicturesGroupByNames = async (pageName: string, componentType: string, componentName = ""): Promise<AxiosResponse<IPictures>> =>
    authHost.get<IPictures>(process.env.VUE_APP_PICTURE_POINT + `${pageName}/${componentType}/${componentName}`);

export const getComponentsNamesBy = async (pageName: string, componentType: string): Promise<AxiosResponse<IComponentsNames>> =>
    authHost.get<IComponentsNames>(process.env.VUE_APP_PICTURE_POINT + `${pageName}/${componentType}`);
