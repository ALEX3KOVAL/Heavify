import axios from "axios";

export const host = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});

export const authHost = axios.create({
    withCredentials: true,
    baseURL: process.env.VUE_APP_API_URL
});
