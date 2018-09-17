import React from 'react';
import {inject, observer} from "mobx-react";

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import Cart from '../../cart/cart-list'
import CartItem from '../../cart/cart-item'

@inject("cart")
@observer
class RightDrawer extends React.Component {
  state = {
    dense: false,
  };

  handleCancel() {
    const { cart } = this.props;
    cart.clearCart();
    cart.closeMenu();
  }

  render() {
    const { cart } = this.props;
    return (
      <div>
        {console.log('PREOPS CART', this.props)}
        <Drawer anchor="right" open={cart.open} onClose={() => cart.closeMenu()}>
          <div
            tabIndex={0}
            role="button"
            onKeyDown={() => cart.closeMenu()}
          >
            <Cart>
              <h1>Carrinho</h1>
              <div>
                <List dense={this.state.dense}>
                  <CartItem cart={cart}/>
                </List>
              </div>
              <span>Total: {cart.quantityItems}</span>
              <button onClick={() => this.handleCancel()}>Cancelar</button>
              <button>Checkout</button>
            </Cart>
          </div>
        </Drawer>
      </div>
    );
  }
}


export default RightDrawer;