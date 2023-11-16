import { sessionStorageServiceInstance } from "../../service/common/SessionStorageService";
import RootStore from "../Store";
import { action, makeObservable, observable } from 'mobx';
class UserStore {
  rootStore;
  isLoggedIn: boolean = false;
  constructor(root: RootStore) {
    this.rootStore = root;
    makeObservable(this, {
      isLoggedIn: observable,

      loginStatusHandler: action.bound,
      logoutStatusHandler: action.bound,
    });

    // this.init();
  }
  // init() {
  //   const userToken = sessionStorageServiceInstance.getUserToken();
  //   if (userToken) {
  //     this.isLoggedIn = true;
  //   }
  // };

  loginStatusHandler(userToken: string) {
    if (!userToken) return;
    this.isLoggedIn = true;
    sessionStorageServiceInstance.setUserToken(userToken)
  }

  logoutStatusHandler() {
    this.isLoggedIn = false;
    sessionStorageServiceInstance.deleteUserToken()
  }
}

export default UserStore;