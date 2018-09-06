import React, { Fragment } from 'react'
import {Redirect} from 'react-router-dom'
import {observer, inject} from 'mobx-react'

const Login = (props) => {
  const {from} = props.location.state || {from: {pathname: "/home"}};

  if (props.auth.logged) {
    return <Redirect to={from}/>;
  }

  return (
    <Fragment>
      <h2>You need to be logged to see the route: {from.pathname}</h2>
      <h1>LOGIN</h1>
      <button onClick={() => props.auth.login()}>Entrar</button>
    </Fragment>
  )
};

export default inject("auth")(observer(Login));