import RootStore from "../Store";
import { action, computed, makeObservable, observable } from 'mobx';
class ToastStore {
  rootStore;

  count: number = 0;
  showToast: boolean = false;
  constructor(root: RootStore) {
    this.rootStore = root;
    makeObservable(this, {
      count: observable,
      showToast: observable,

      setShowToast: action,
      showToastHandler: action.bound,

      getShowToast: computed,
    })
  }

  setShowToast(flag: boolean) {
    this.showToast = flag;
  }
  showToastHandler() {
    this.count = this.count + 1;
  }

  get getShowToast() {
    return this.showToast;
  }
}

export default ToastStore;