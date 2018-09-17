import React, {Component, Fragment} from 'react'
import {inject, observer} from "mobx-react";
import Spinner from "../../../components/common/loading";

@inject("product", "cart")
@observer
class ProductDetail extends Component {
  componentDidMount() {
    console.log('propriedade', this.props);
    let id = this.props.match.params.id ? this.props.match.params.id : null;
    this.props.product.getProduct(id);

  }

  handleBuy(product) {
    const { cart } = this.props;
    cart.addProduct(product);
    cart.openMenu();
  }

  render() {
    const { product } = this.props.product;

    return (
      <Fragment>{
        product ?
          <div>
            <h1>{product.name}</h1>
            <p>{product.longDescription}</p>
            <span>{product.salePrice}</span>
            <button onClick={() => this.handleBuy(product)}>Comprar</button>
          </div>
          : <Spinner/>
      }</Fragment>
    )
  }
}

export default ProductDetail