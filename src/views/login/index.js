import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from "../../store/actions/authAction"

const Login = (props) => {
    const {from} = props.location.state || {from: {pathname: "/sales"}};

    if (props.auth.logged) {
        return <Redirect to={from}/>;
    }

    return (
        <div>
            <h1>You need to be logged to see the route: {from.pathname}</h1>
            <button onClick={props.login}>Log in</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(login({}))
});

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)