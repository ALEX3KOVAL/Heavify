import {authHost} from "../../shared/typicode/api/base";
import authRequestInterceptor from "./consts/http/interceptors/fulfilled/request";
import authResponseRejectedInterceptor from "./consts/http/interceptors/rejected/response";

authHost.interceptors.request.use(authRequestInterceptor);

authHost.interceptors.response.use(
    (config) => config,
    (error) => authResponseRejectedInterceptor(error)
);
