import {host} from "@/http";
import jwt_decode from "jwt-decode";

export const registration = async (userName: string, email: string, password: string) => {
    //@ts-ignore
    const {accessToken} = await host.post("api/users/registration", {userName, email, password, role: "ADMIN"});
    localStorage.setItem("accessToken", accessToken);
    return jwt_decode(accessToken);
}

export const login = async (email: string, password: string) => {
    const {data} = await host.post("api/users/login", {email, password});
    localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
    return jwt_decode(data.accessToken);
}

export const check = async () => {
    console.log("ebaaaaaat");
    try {
        //@ts-ignore
        const accessToken = await loggedIn(true);
        localStorage.removeItem("accessToken");
        localStorage.setItem("accessToken", accessToken);
        return jwt_decode(accessToken);
    }
    catch (err) {
        console.log((err as Error).message);
    }
}

export const loggedIn = async (jwt = false) => {
    alert("xxxxxxxxxxx");
    try {
        //@ts-ignore
        //const {accessToken} = await authHost.get("api/users/auth");
        return jwt ? accessToken : true;
    }
    catch (err) {
        return jwt ? "" : false;
    }
}
