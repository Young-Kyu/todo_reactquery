import RootStore from "../Store";
import { action, makeObservable, observable } from 'mobx';
class TodoStore {
  rootStore;
  constructor(root: RootStore) {
    this.rootStore = root;
    makeObservable(this, {

    })
  }
}

export default TodoStore;