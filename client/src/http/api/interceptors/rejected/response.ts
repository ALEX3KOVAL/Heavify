import errorCodes from "@/http/api/codes/httpStatusCodes";
import {authHost} from "@/http";
import AuthHttpAPI from "@/http/api/auth";
import {IResponse} from "@/interfaces/IResponse";
import axios, {AxiosResponse} from "axios";
import {IAuthResponse} from "@/interfaces/IAuthResponse";

const authResponseRejectedInterceptor = async (error: any): Promise<AxiosResponse<IAuthResponse, any> | IResponse> => {
    try {
        switch (error.response.status) {
            case errorCodes.ERROR.BAD_REQUEST_CODE:
                console.log("error interceptor bad request");
                console.log(error.response.data.message);
                return {status: error.response.status, message: error.response.data.message};
            case errorCodes.ERROR.UNAUTHORIZED_CODE:
                error.config._isRetry = true;
                try {
                    await AuthHttpAPI.checkAuth({});
                    return authHost.request(error.config);
                }
                catch(err) {
                    return {status: error.response.status, message: error.response.data.message};
                }
        }
        return {status: error.response.status, message: ""}
    }
    catch(err) {
        //@ts-ignore
        console.log(err.message);
    }
    return {status: error.response.status, message: ""}
}

export default authResponseRejectedInterceptor;
