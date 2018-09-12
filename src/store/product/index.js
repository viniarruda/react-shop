import { observable, action } from 'mobx'
import axios from "axios"
import api from '../../utils/constants'
import { toJS, values } from 'mobx';

// class SaleItem {
//   @observable() items;
//
//   // Single Product
//   @observable() itemId;
//   @observable() name;
//   @observable() salePrice;
//   @observable() thumbnailImage;
//   @observable() shortDescription;
//   @observable() longDescription;
//   @observable() largeImage;
//   @observable() color;
//   @observable() offerType;
//   @observable() stock;
//   @observable() modelNumber;
//   @observable() availableOnline;
//   @observable() imageEntities;
//   @observable() product;
//   @observable() quantity;
//   @observable() price;
//
//   // @observable() get total(){
//   //         return this.quantity*this.price;
//   // }
// }


class ProductStore {
  @observable products = [];

  async fetchData() {
    let { data } = await axios.get(
      `https://api.myjson.com/bins/hw6x4`
    );

    this.setData(data);
  }

  @action setData(data) {
    this.products = data;
    console.log('setdata', this.products)
  }

}

const productStore = new ProductStore();

export default productStore;