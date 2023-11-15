import RootStore from "../Store";
import { action, makeObservable, observable } from 'mobx';
class UserStore {
  rootStore;
  constructor(root : RootStore){
    this.rootStore = root;
    makeObservable(this,{

    })
  }
  aa(){
  }
}

export default UserStore;