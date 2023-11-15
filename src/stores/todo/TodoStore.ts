import RootStore from "../Store";
import { action, makeObservable, observable } from 'mobx';
class TodoStore {
  rootStore;
  constructor(root : RootStore){
    this.rootStore = root;
    makeObservable(this,{

    })
  }
  aa(){
    this.rootStore.userStore.aa();
  }
}

export default TodoStore;