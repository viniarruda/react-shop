import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import colors from './settings/colors'

const NavLink = styled(Link)`
    color: ${colors.secondaryLight};
    text-decoration: none;
    text-transform: none;
    text-align: center;
    padding: 12px;
    &:hover, &:active, &:visited, &:link{
      color: ${colors.secondaryLight};
      text-decoration: none;
      text-transform: none;
    }
    &:hover {
      color: ${colors.tertiary};
    }
`;

export default NavLink;