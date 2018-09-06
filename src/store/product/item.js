import { types } from 'mobx-state-tree';

/**
 * Mobx State Tree Store
 * The store recieves 3 parameters
 *  1st one is the Store Name
 *  2nd is an object with the Props and Computed values
 *  3rd is and object with the Actions
 **/

const ItemStore = types
    .model('ItemStore', {
        itemId: types.number,
        name: types.string,
        salePrice: types.number,
        thumbnailImage: types.string,
        shortDescription: types.string,
        longDescription: types.string,
        largeImage: types.string,
        stock: types.string,
    });

export default ItemStore;