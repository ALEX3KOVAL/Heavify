import {authHost} from "../../../features/auth/index";
import {AxiosResponse} from "axios";
import {IAuthResponse} from "interfaces/IAuthResponse";
import {IResponse} from "interfaces/IResponse";

const login = async (email: string, password: string): Promise<AxiosResponse<IAuthResponse, any> | IResponse> => {
    const res = await authHost.post<IAuthResponse, IResponse>(process.env.VUE_APP_API_URL + process.env.VUE_APP_USER_POINT + 'login', {email, password});
    console.log("login in services --- ");
    return res;
}

const registration = async (userName: string, email: string, password: string): Promise<AxiosResponse<IAuthResponse>> =>
    authHost.post<IAuthResponse>(process.env.VUE_APP_API_URL + process.env.VUE_APP_USER_POINT + 'registration', {userName, email, password});

const logout = async (): Promise<void> =>
    authHost.post(process.env.VUE_APP_USER_POINT + 'logout');

const checkAuth = async(): Promise<AxiosResponse<IAuthResponse>> => {
    const res = await authHost.get<IAuthResponse>(process.env.VUE_APP_API_URL + process.env.VUE_APP_USER_POINT + 'refresh', {withCredentials: true});
    console.log("checkAuth in services");
    return res;
}

const fetchAll = async (urls: string[]) => {
    const responses = urls.map(async (url) => await fetch(url, {method: "GET"}));
}


export default {
    login,
    registration,
    logout,
    checkAuth
}
