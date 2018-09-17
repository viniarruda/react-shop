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
    const {from} = this.props.location.state || {from: {pathname: "/sales"}};

    if (auth.logged) {
      return <Redirect to={from}/>;
    }

    return (
      <Container>
        <LoginForm auth={auth}/>
      </Container>
    )
  }
};

export default Login;