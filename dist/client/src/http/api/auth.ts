import AuthService from "@/services/auth";
import {IUser} from "@/interfaces/IUser";

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
    const response = await AuthService.logout();
    localStorage.removeItem('token');
}

export default {
    registration,
    login,
    logout
}
