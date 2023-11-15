import ToastStore from "./common/ToastStore";
import TodoStore from "./todo/TodoStore";
import UserStore from "./user/UserStore";

class RootStore {

  todoStore: TodoStore;
  userStore: UserStore;
  toastStore : ToastStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.todoStore = new TodoStore(this);
    this.toastStore = new ToastStore(this);
  }
}

export default RootStore;