import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import baseStyles from './base-styles'
import PrivateRoute from '../private-route'
import Header from '../../components/common/header'
import Content from '../../components/common/content'
import Login from '../../views/login'
import Sales from '../../views/sales'

const Root = ({store}) => {
  baseStyles();
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={Login}/>
              <PrivateRoute path="/sales" component={Sales}/>
            </Switch>
          </Content>
        </div>
      </Router>
    </Provider>)
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root