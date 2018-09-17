import React from 'react'
import { Provider } from 'mobx-react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import baseStyles from './base-styles'
import PrivateRoute from './private-route'
import Header from '../components/common/header/header'
import Content from '../components/common/content'
import Login from '../views/login'
import Home from '../views/sales'
import ProductDetail from '../views/sales/product-detail'
import RightDrawer from '../components/common/drawer/right'
import DevTools from "mobx-react-devtools"

// Import our Stores Here
import ProductStore from '../store/product'
import AuthStore from "../store/auth"
import CartStore from "../store/cart";

const store = {
  auth : AuthStore,
  product: ProductStore,
  cart: CartStore
};

const Root = () => {
  baseStyles();
  return (
    <Provider {...store} >
      <Router>
        <ion-app>
          <Header/>
          <RightDrawer/>
          <Content>
            <Switch>
              <Route exact path="/login" component={Login}/>
              <PrivateRoute path="/sales" component={Home}/>
              <PrivateRoute path="/product/:id" component={ProductDetail}/>
            </Switch>
          </Content>
        </ion-app>
      </Router>
    </Provider>
  )
};

export default Root;