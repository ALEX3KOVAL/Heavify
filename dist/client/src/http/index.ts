import axios from "axios";
import authRequestInterceptor from "@/http/api/interceptors/fulfilled/request";
import authResponseRejectedInterceptor from "@/http/api/interceptors/rejected/response";

export const host = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});

export const authHost = axios.create({
    withCredentials: true,
    baseURL: process.env.VUE_APP_API_URL
});


authHost.interceptors.request.use(authRequestInterceptor);

authHost.interceptors.response.use(
    (config) => config,
    (error) => authResponseRejectedInterceptor(error)
);
