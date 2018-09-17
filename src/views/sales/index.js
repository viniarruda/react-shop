import React, {Component, Fragment} from 'react'
import { inject, observer } from "mobx-react";
import styled from 'styled-components';
import { observable } from 'mobx';
import CardItem from "../../components/sales/product/card-item";
import Spinner from "../../components/common/loading";

const ProductList = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

@inject("product")
@observer
class Home extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    console.log(this.props.product);
    this.props.product.fetchData();
  }

  render() {
    const { products } = this.props.product;
    return (
      <Fragment>
        <h1>{products.brand}</h1>
        <ProductList>
          {
            products.items ? products.items.map((item) =>
              <CardItem key={item.itemId} product={item} />
            ) : <Spinner/>
          }
        </ProductList>
      </Fragment>
    )
  }
}

export default Home