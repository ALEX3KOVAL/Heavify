import AuthService from "@/services/auth";
import {IUser} from "@/interfaces/IUser";
import {AxiosResponse} from "axios";
import {IAuthResponse} from "@/interfaces/IAuthResponse";

const _addAccessTokenInLSandGetUserData = (response:  AxiosResponse<IAuthResponse, any>) => {
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data.user;
}

const registration = async (userName: string, email: string, password: string) => {
    const response = await AuthService.registration(userName, email, password);
    return _addAccessTokenInLSandGetUserData(response);
}

const login = async (email: string, password: string): Promise<IUser> => {
    console.log("URL ---- ", process.env.VUE_APP_USER_POINT);
    const response = await AuthService.login(email, password);
    console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvv");
    return _addAccessTokenInLSandGetUserData(response);
}

const logout = async (): Promise<void> => {
    await AuthService.logout();
    localStorage.removeItem('token');
}

const checkAuth = async(): Promise<IUser> => {
    const response = await AuthService.checkAuth();
    return _addAccessTokenInLSandGetUserData(response);
}

export default {
    registration,
    login,
    logout,
    checkAuth
}
