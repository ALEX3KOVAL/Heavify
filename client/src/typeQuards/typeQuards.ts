import {AxiosResponse} from "axios";
import {IResponse} from "@/interfaces/IResponse";
import {IAuthResponse} from "@/interfaces/IAuthResponse";
import {IUser} from "@/interfaces/IUser";

export const isErrorResponse = (response: AxiosResponse<IAuthResponse, any> | IResponse): response is IResponse => {
    return (response as IResponse).message !== undefined;
}


export const isIUser = (user: IUser | IResponse): user is IUser =>
    (user as IUser).id !== undefined;
