import AuthService from "../../../features/auth/api/auth";
import {IUser} from "interfaces/IUser";
import {AxiosResponse} from "axios";
import {IAuthResponse} from "interfaces/IAuthResponse";
import {IResponse} from "interfaces/IResponse";
import {isErrorResponse} from "../../../typeQuards/typeQuards";

const _addAccessTokenInLocalStorageAndGetUserData = (response: AxiosResponse<IAuthResponse>) => {
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data.user;
}

const registration = async (userName: string, email: string, password: string) => {
    const response = await AuthService.registration(userName, email, password);
    return _addAccessTokenInLocalStorageAndGetUserData(response);
}


const login = async (email: string, password: string): Promise<IUser | IResponse> => {
    console.log("URL ---- ", process.env.VUE_APP_USER_POINT);
    const response = await AuthService.login(email, password);
    console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvv");
    if (!isErrorResponse(response)) {
        return _addAccessTokenInLocalStorageAndGetUserData(response as AxiosResponse<IAuthResponse>);
    }
    return response;
}

const logout = async (): Promise<void> => {
    await AuthService.logout();
    localStorage.removeItem('token');
}

const checkAuth = async({isNeededUserData = false}): Promise<IUser | undefined> => {
    const response = await AuthService.checkAuth();
    localStorage.setItem("accessToken", response.data.accessToken);
    return isNeededUserData ? response.data.user : void 0;
}

export {
    registration,
    login,
    logout,
    checkAuth
}
