import axios from "axios";

export const host = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});

export const authHost = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});

const authInterceptor = (config: any) => {
    console.log("cccccccccccccccccccc");
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken != null) {
        config.headers.authorization = `Bearer ${accessToken}`;
        return config;
    }
}

authHost.interceptors.request.use(authInterceptor);
