import React from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'
import NavLink from './nav-link'

const Navbar = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;    
  background: #f8f9fa;
  position: ${props => props.fixed ? 'fixed' : 'relative'};
`;

const Right = styled.div`
  flex: 1;
  text-align: right;
`;

const Header = (props) => {
  return (
    <Navbar>
      <div>Title</div>
      <NavLink to='/home'>Home</NavLink>
      <Right>
        {
          props.auth.logged ?
            <NavLink to='/' onClick={() => props.auth.logout()}>Logout</NavLink>
            :
            <NavLink to='/login'>Login</NavLink>
        }
      </Right>
    </Navbar>
  )
}


export default inject("auth")(observer(Header));