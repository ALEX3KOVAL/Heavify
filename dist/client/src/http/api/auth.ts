import AuthService from "@/services/auth";
import {IUser} from "@/interfaces/IUser";
import {AxiosResponse} from "axios";
import {IAuthResponse} from "@/interfaces/IAuthResponse";

const addAccessTokenInLSandGetUserData = (response:  AxiosResponse<IAuthResponse, any>) => {
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data.user;
}

const registration = async (userName: string, email: string, password: string) => {
    const response = await AuthService.registration(userName, email, password);
    return addAccessTokenInLSandGetUserData(response);
}

const login = async (email: string, password: string): Promise<IUser> => {
    const response = await AuthService.login(email, password);
    return addAccessTokenInLSandGetUserData(response);
}

const logout = async (): Promise<void> => {
    await AuthService.logout();
    localStorage.removeItem('token');
}

const checkAuth = async(): Promise<IUser> => {
    const response = await AuthService.checkAuth();
    return addAccessTokenInLSandGetUserData(response);
}

export default {
    registration,
    login,
    logout,
    checkAuth
}
