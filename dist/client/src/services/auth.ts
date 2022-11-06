import {authHost} from "@/http";
import {AxiosResponse} from "axios";
import {IAuthResponse} from "../../interfaces/IAuthResponse";

const login = async (email: string, password: string): Promise<AxiosResponse<IAuthResponse>> =>
    authHost.post<IAuthResponse>(process.env.VUE_APP_USER_POINT + 'login', {email, password});

const registration = async (userName: string, email: string, password: string): Promise<AxiosResponse<IAuthResponse>> =>
    authHost.post<IAuthResponse>(process.env.VUE_APP_USER_POINT + 'registration', {userName, email, password});

const logout = async (): Promise<void> =>
    authHost.post(process.env.VUE_APP_USER_POINT + 'logout');

export default {
    login,
    registration,
    logout
}
