import { observable, action, computed } from 'mobx'

class CartStore {
  @observable open = false;
  @observable cartId;
  @observable cartProducts = [];

  @computed get quantityItems() {
    return this.cartProducts.length
  }

  @action openMenu() {
    this.open = true;
  }

  @action closeMenu() {
    this.open = false;
  }

  @action addProduct(item) {
    this.cartProducts.push(item);
    console.log('carrinho', this.cartProducts)
  }

  @action removeProduct(id) {
    if(id > -1) {
      this.cartProducts.splice(id, 1);
    }
    console.log('novo array', this.cartProducts);
  }

  @action clearCart() {
    this.cartProducts = [];
  }

}

const cartStore = new CartStore();

export default cartStore;