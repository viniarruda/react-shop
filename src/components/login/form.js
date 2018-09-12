import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '../common/settings/colors'
import breakpoints from '../common/settings/breakpoints'

import InputAdornment from '@material-ui/core/InputAdornment';
import Snackbar from '@material-ui/core/SnackbarContent';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PasswordIcon from '@material-ui/icons/Https';

import {
  isUndefined as _isUndefined
} from 'lodash'


const Form = styled.form`
  display: flex;
  height: auto;
  flex-direction: column;
  border-radius: 5px;
  padding: 20px;
  margin: 15px auto 0;
  width: 500px;
  background-color: ${colors.secondaryLight};
  box-shadow: 0px 10px 12px rgba(0,0,0,0.2);
  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`;

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

const Input = styled(TextField)`
  width: 100%;
  margin: 10px 0!important;
`;

const Submit = styled.button`
  width: 50%;
  background-color: transparent;
  border: 1px solid ${colors.primaryLight};
  color: ${colors.primaryLight};
  font-weight: bold;
  margin: 15px auto 0!important;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background-color: ${colors.primaryLight};
    color: ${colors.invert};
  }
`;


class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.updateProperty = this.updateProperty.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      error: false,
      horizontal: 'center',
      vertical: 'bottom',
      disabled: true
    }
  }

  updateProperty (key, value) {
    this.props.auth[key] = value;
  }

  onChange (event) {
    this.updateProperty(event.target.name, event.target.value);
  }

  handleClick() {
    console.log('dele')
    if(_isUndefined(this.props.auth.username) && _isUndefined(this.props.auth.password)) {
      console.log('dale')
      this.setState({
        error: true
      })
    } else {
      this.props.auth.login()
    }
  }
  render() {
    const { vertical, horizontal } = this.state

    return (
      <Form>
        {console.log(this.props)}
        <Title>Login</Title>
        <Input id="username"
               name="username"
               label="Usuário"
               value={this.props.auth.username}
               onChange={this.onChange}
               InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                     <AccountCircle />
                   </InputAdornment>
                 ),
               }}
        />
        <Input id="password"
               type="password"
               label="Senha"
               name="password"
               value={this.props.auth.password}
               onChange={this.onChange}
               InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                     <PasswordIcon />
                   </InputAdornment>
                 ),
               }}
        />
        {
          this.state.error &&
            <Snackbar
              message={
                'Os campos devem ser preenchidos'
              }
              anchorOrigin={{ vertical, horizontal }}
            />
        }
        <Submit type="submit" onClick={this.handleClick}>Entrar</Submit>
      </Form>
    )
  }
}

export default LoginForm