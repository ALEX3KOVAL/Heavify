import Vue from "vue";
import {IUser} from "@/interfaces/IUser";
import AuthHttpAPI from "@/http/api/auth";
import {IResponse} from "@/interfaces/IResponse";
import {isIUser} from "@/typeQuards/typeQuards";
import httpStatusCodes from "@/http/api/codes/httpStatusCodes";

const state = Vue.observable({
  isAuth: false,
  user: {} as IUser,
});

const getters = {
  isAuth: (): boolean => state.isAuth,
  user: (): IUser => state.user
}

const mutations = {
  setAuth: (value: boolean) => state.isAuth = value,
  setUser: (value: IUser) => state.user = value
}

const actions = {
  test: (message: string) => alert(message),
  login: async (email: string, password: string): Promise<IResponse> => {
      const user: IUser | IResponse = await AuthHttpAPI.login(email, password);
      if (isIUser(user)) {
        mutations.setAuth(true);
        mutations.setUser(user);
        return {status: httpStatusCodes.SUCCESS, message: ""}
      }
      return {status: user.status, message: user.message};
  },
  registration: async (userName: string, email: string, password: string) => {
    try {
      const user: IUser = await AuthHttpAPI.registration(userName, email, password);
      mutations.setAuth(true);
      mutations.setUser(user);
    }
    catch(err) {
      console.log((err as any)?.response?.data?.message);
    }
  },
  logout: async () => {
    try {
      await AuthHttpAPI.logout();
      mutations.setAuth(false);
      mutations.setUser({} as IUser);
    }
    catch(err) {
      console.log((err as any)?.response?.data?.message);
    }
  },
  checkAuth: async() => {
    try {
      console.log("fffffffffffffff");
      const user: IUser = (await AuthHttpAPI.checkAuth({isNeededUserData: true}))!;
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      mutations.setAuth(true);
      mutations.setUser(user);
      return true;
    }
    catch (err) {
      console.log((err as any).message);
      return false;
    }
  }
}

export default {
  getters,
  mutations,
  actions,
}
