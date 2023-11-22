import { sessionStorageServiceInstance } from "../../service/common/SessionStorageService";
import RootStore from "../Store";
import { action, computed, makeObservable, observable } from 'mobx';
class UserStore {
  rootStore;
  isLoggedIn: boolean = false;
  constructor(root: RootStore) {
    this.rootStore = root;
    makeObservable(this, {
      isLoggedIn: observable,

      setIsLoggedIn: action,

      getIsLoggedIn: computed,

      loginStatusHandler: action.bound,
      logoutStatusHandler: action.bound,
    });

  }

  setIsLoggedIn(flag: boolean) {
    this.isLoggedIn = flag;
  }

  get getIsLoggedIn() {
    return this.isLoggedIn;
  }

  loginStatusHandler(userToken: string) {
    if (!userToken) return;
    sessionStorageServiceInstance.setUserToken(userToken)
  }

  logoutStatusHandler() {
    sessionStorageServiceInstance.deleteUserToken()
  }
}

export default UserStore;