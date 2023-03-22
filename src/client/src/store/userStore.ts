import Vue from "vue";
import {IUser} from "interfaces/IUser";
import {authModel, httpCodes} from "../features/auth";
import {IResponse} from "interfaces/IResponse";
import {isIUser} from "../typeQuards/typeQuards";

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
      const user: IUser | IResponse = await authModel.login(email, password);
      if (isIUser(user)) {
        mutations.setAuth(true);
        mutations.setUser(user);
        return {status: httpCodes.SUCCESS, message: ""}
      }
      return {status: user.status, message: user.message};
  },
  registration: async (userName: string, email: string, password: string) => {
    try {
      const user: IUser = await authModel.registration(userName, email, password);
      mutations.setAuth(true);
      mutations.setUser(user);
    }
    catch(err) {
      console.log((err as any)?.response?.data?.message);
    }
  },
  logout: async () => {
    try {
      await authModel.logout();
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
      const user: IUser = (await authModel.checkAuth({isNeededUserData: true}))!;
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
