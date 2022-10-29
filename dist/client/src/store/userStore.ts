//@ts-ignore
import {makeAutoObservable} from "mobx";

declare class UserStore {
  setIsAuth(authState: boolean): void;
  setUser(user: any): void;
  isAuth(): boolean;
  user(): any;
}

function UserStore() {
  var _isAuth: boolean = false;
  var _user = {};
  var _instance = new UserStore();

  Object.setPrototypeOf(_instance, UserStore.prototype);

  (() => {
    //@ts-ignore
    makeAutoObservable(this);
  })();

  UserStore.prototype.setIsAuth = (authState: boolean) => _isAuth = authState;

  UserStore.prototype.setUser = (user: any) => _user = user;

  UserStore.prototype.isAuth = () => _isAuth;

  UserStore.prototype.user = () => _user;

  return _instance;
}

export default UserStore;
