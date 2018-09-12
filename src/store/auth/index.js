import { observable, action } from 'mobx'

class AuthStore {

  @observable logged;
  @observable username;
  @observable password;

  constructor() {
    this.logged = false;
  }

  @action login() {
    this.logged = true;
  }

  @action logout() {
    this.logged = false;
  }

}

const authStore = new AuthStore();

export default authStore
