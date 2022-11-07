import AuthService from "@/services/auth";
import {IUser} from "@/interfaces/IUser";
import axios from "axios";
import {IAuthResponse} from "@/interfaces/IAuthResponse";

const registration = async (userName: string, email: string, password: string) => {
    const response = await AuthService.registration(userName, email, password);
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data.user;
}

const login = async (email: string, password: string): Promise<IUser> => {
    const response = await AuthService.login(email, password);
    localStorage.setItem('token', response.data.accessToken);
    return response.data.user;
}

const logout = async (): Promise<void> => {
    await AuthService.logout();
    localStorage.removeItem('token');
}

const checkAuth = async(): Promise<IUser> => {
    const response = await AuthService.checkAuth();
    localStorage.setItem('token', response.data.accessToken);
    return response.data.user;
}

export default {
    registration,
    login,
    logout,
    checkAuth
}
