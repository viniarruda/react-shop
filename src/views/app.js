import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route"
import Header from '../components/common/header'
import Login from '../views/login'
import Sales from '../views/sales'

@withRouter
@inject("store")
@observer
export default class App extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }
    componentDidMount() {
        this.authenticate();
    }
    authenticate(e) {
        if (e) e.preventDefault();
        this.store.appState.authenticate();
    }
    render() {
        const {
            authenticated,
            authenticating,
            timeToRefresh,
            refreshToken,
        } = this.store.appState;
        return (
            <div className="wrapper">
                {/*<DevTools />*/}
                <Header />
                <Route
                    exact
                    path="/sales"
                    render={props => (
                        <LazyRoute {...props} component={import(Sales)} />
                    )}
                />
                <Route
                    exact
                    path="/login"
                    render={props => (
                        <LazyRoute {...props} component={import(Login)} />
                    )}
                />
            </div>
        );
    }
}
