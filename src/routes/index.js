import React from 'react'
import { Provider } from 'mobx-react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import baseStyles from './base-styles'
import PrivateRoute from './private-route'
import Header from '../components/common/header/header'
import Content from '../components/common/content'
import Login from '../views/login'
import Home from '../views/home'
import DevTools from "mobx-react-devtools"

// Import our Stores Here
import ProductStore from '../store/product'
import AuthStore from "../store/auth"

const store = {
  auth : AuthStore,
  product: ProductStore
};

const Root = () => {
  baseStyles();
  return (
    <Provider {...store} >
      <Router>
        <ion-app>
          <DevTools />
          <Header/>
          <Content>
            <Switch>
              <Route exact path="/login" component={Login}/>
              <PrivateRoute path="/home" component={Home}/>
            </Switch>
          </Content>
        </ion-app>
      </Router>
    </Provider>
  )
};

export default Root;