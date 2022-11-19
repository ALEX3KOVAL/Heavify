import Vue from "vue";
import {IUser} from "@/interfaces/IUser";
import AuthHttpAPI from "@/http/api/auth";

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
  login: async (email: string, password: string) => {
    try {
      const user: IUser = await AuthHttpAPI.login(email, password);
      mutations.setAuth(true);
      mutations.setUser(user);
    }
    catch(err) {
      console.log((err as any)?.response?.data?.message);
    }
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
      const user: IUser = await AuthHttpAPI.checkAuth();
      mutations.setAuth(true);
      mutations.setUser(user);
    }
    catch (err) {
      console.log((err as any)?.response?.data?.message);
    }
  }
}

export default {
  getters,
  mutations,
  actions,
}
