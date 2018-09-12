import React, {Component, Fragment} from 'react'
import CardItem from './card-item'

class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <h1>Produtos</h1>
        <CardItem/>
      </Fragment>
    )
  }
}

export default ProductList