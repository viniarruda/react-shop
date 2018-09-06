import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from "mobx-react";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import baseStyles from './base-styles'
import PrivateRoute from './private-route'
import App from '../views/app'
import Header from '../components/common/header'
import Content from '../components/common/content'

const Root = ({store}) => {
    baseStyles();
    return (
        <AppContainer>
            <Router>
                <Provider store={store}>
                    <Header />
                    <Content>
                        <App />
                    </Content>
                </Provider>
            </Router>
        </AppContainer>
    )
};

Root.propTypes = {
    store: PropTypes.object.isRequired
};

Root(App);

if (module.hot) {
    module.hot.accept(() => Root(App));
}
