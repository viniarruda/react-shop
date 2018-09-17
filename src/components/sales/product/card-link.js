import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import colors from '../../common/settings/colors'

const CardLink = styled(Link)`
    color: ${colors.primaryLight};
    font-weight: bold;
    text-decoration: none;
    text-transform: none;
    text-align: center;
    padding: 12px;
    &:hover {
      color: ${colors.primary};
    }
`;

export default CardLink;