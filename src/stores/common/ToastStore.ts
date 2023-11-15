import RootStore from "../Store";
import { action, makeObservable, observable } from 'mobx';
class ToastStore {
  rootStore;

  count : number = 0;
  constructor(root : RootStore){
    this.rootStore = root;
    makeObservable(this,{
      count: observable,
      showToast : action.bound,
    })
  }
  showToast(){
    console.log('showToast');
    console.log(this.count);
    this.count = this.count + 1;
  }
}

export default ToastStore;