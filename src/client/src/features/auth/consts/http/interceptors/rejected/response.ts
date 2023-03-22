import {authHost, authModel, httpCodes} from "features/auth";
import {IResponse} from "interfaces/IResponse";
import {AxiosResponse} from "axios";
import {IAuthResponse} from "interfaces/IAuthResponse";

const authResponseRejectedInterceptor = async (error: any): Promise<AxiosResponse<IAuthResponse, any> | IResponse> => {
    try {
        switch (error.response.status) {
            case httpCodes.BAD_REQUEST:
                console.log("error interceptor bad request");
                console.log(error.response.data.message);
                return {status: error.response.status, message: error.response.data.message};
            case httpCodes.UNAUTHORIZED:
                error.config._isRetry = true;
                try {
                    await authModel.checkAuth({});
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
