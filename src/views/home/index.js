import React, {Component, Fragment} from 'react'
import { inject, observer } from "mobx-react";
import { observable } from 'mobx';
import CardItem from "./product-list/card-item";

@inject("product")
@observer
class Home extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    console.log(this.props.product)
    this.props.product.fetchData()
      .then(() => this.forceUpdate());
  }

  render() {
    const { products } = this.props.product;
    return (
      <Fragment>
        <h1>{products.brand}</h1>
        {
          products.items ? products.items.map(item => {
            <h2>item.itemId</h2>
          }) : 'Loading...'
        }
      </Fragment>
    )
  }
}

export default Home