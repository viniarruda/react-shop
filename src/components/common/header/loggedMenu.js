import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import colors from '../settings/colors'
import IconButton from "@material-ui/core/IconButton/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom";

const ItemLink = styled(Link)`
  text-decoration: none;
`;

@inject('auth')
@observer
class LoggedMenu extends Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    const { auth } = this.props;
    auth.logout();
    this.handleClose();
  }
  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <Fragment>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem>Perfil</MenuItem>
          <MenuItem>Minha Conta</MenuItem>
          <ItemLink to='/login' onClick={this.handleLogout}>
            <MenuItem>Logout</MenuItem>
          </ItemLink>
        </Menu>
      </Fragment>
    )
  }
}

export default LoggedMenu