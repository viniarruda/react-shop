import React, { Component, Fragment } from 'react'
import {Redirect} from 'react-router-dom'
import {observer, inject} from 'mobx-react'

import LoginForm from '../../components/login/form'
import styled from "styled-components"
import colors from '../../components/common/settings/colors'

const Container = styled.div`
`;

@inject('auth')
@observer
class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { auth } = this.props;
    const {from} = this.props.location.state || {from: {pathname: "/home"}};

    if (auth.logged) {
      return <Redirect to={from}/>;
    }

    return (
      <Container>
        <h2>You need to be logged to see the route: {from.pathname}</h2>
        <LoginForm auth={auth}/>
      </Container>
    )
  }
};

export default Login;