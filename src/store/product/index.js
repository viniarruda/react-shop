// import { types } from 'mobx-state-tree';
// import Items from './item'
// /**
//  * Mobx State Tree Store
//  * The store recieves 3 parameters
//  *  1st one is the Store Name
//  *  2nd is an object with the Props and Computed values
//  *  3rd is and object with the Actions
//  **/
//
// class Customer{
//    @observable() name:string;
// }
//
// class SaleItem{
//         @observable() product:number;
//         @observable() quantity:number;
//         @observable() price:number;
//         @observable() get total(){
//                 return this.quantity*this.price;
//         }
// }
//
// class Sale{
//      @observable() customer:Customer;
//      @observable() product:number;
//
// }
//
// const ProductStore = types
//     .model('ProductStore', {
//         itemId: types.number,
//         name: types.string,
//         salePrice: types.number,
//         thumbnailImage: types.string,
//         shortDescription: types.string,
//         longDescription: types.string,
//         largeImage: types.string,
//         stock: types.string,
//         items: types.array(Items),
//     });
//
// export default ProductStore;