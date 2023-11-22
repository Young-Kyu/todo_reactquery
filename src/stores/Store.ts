import ToastStore from "./common/ToastStore";
import UserStore from "./user/UserStore";

class RootStore {

  userStore: UserStore;
  toastStore: ToastStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.toastStore = new ToastStore(this);
  }
}

export default RootStore;