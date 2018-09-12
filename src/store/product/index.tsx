import { observable, action } from 'mobx'

class AuthStore {
  // @ts-ignore
  @observable logged = false;
  // @ts-ignore
  @action login() {
    this.logged = true
  }
  // @ts-ignore
  @action logout() {
    this.logged = false
  }

}

export default AuthStore;
