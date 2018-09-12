import React, {Component} from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import LoggedMenu from './loggedMenu'


const Navbar = styled.div`
  flex-grow: 1;
`;


const NavTitle = styled(Typography)`
  flex-grow: 1;
`;

const MenuButton = styled(IconButton)`
  margin-left: -12;
  margin-right: 20;
`;


@inject('auth')
@observer
class Header extends Component {
  render() {
    const { auth } = this.props

    return (
      <Navbar>
        <AppBar position="static">
          <Toolbar>
            <MenuButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </MenuButton>
            <NavTitle variant="title" color="inherit">
              React Shop
            </NavTitle>
            {
              auth.logged &&
                <LoggedMenu/>
            }
          </Toolbar>
        </AppBar>
      </Navbar>
    )
  }
}


export default Header;