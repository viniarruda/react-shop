import React from 'react'
import { Provider } from 'mobx-react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import baseStyles from './base-styles'
import PrivateRoute from './private-route'
import Header from '../components/common/header'
import Content from '../components/common/content'
import Login from '../views/login'
import Home from '../views/home'
import DevTools from "mobx-react-devtools"

// Import our Stores Here
import ProductStore from '../store/product'
import AuthStore from "../store/auth"

// Because they're classes, we have to instantiate them here :)
const authStore = AuthStore.create({
  logged: false
});

const store = {
  product: ProductStore,
  auth : authStore
};

const Root = () => {
  baseStyles();
  return (
    <Provider {...store} >
      <Router>
        <div>
          <DevTools />
          <Header/>
          <Content>
            <Switch>
              <Route exact path="/login" component={Login}/>
              <PrivateRoute exact path="/home" component={Home}/>
            </Switch>
          </Content>
        </div>
      </Router>
    </Provider>
  )
};

export default Root;