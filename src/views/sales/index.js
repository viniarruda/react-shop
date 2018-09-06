import React from 'react'
import PropTypes from 'prop-types'
import ProductList from '../../components/sales/product-list/product-list'
import ProductItem from '../../components/sales/product-list/product-item'

const Sales = () => (
  <div>
    <h1>Produtos</h1>
    <ProductList>
      <ProductItem>Item 1</ProductItem>
    </ProductList>
  </div>
)

export default Sales