import { colors } from './colors';
import styled from 'styled-components'

const Cards = styled.div`
{

    padding: 20px 15px;
    width: 100%;
    position: relative;
    max-height: 100%;
    height: auto;
    margin: 20px;
    border-radius: 3px;
    border: none;
    text-align: center;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
    background-color: #ffffff;
    transition: box-shadow 0.3s ease-in-out;
    &:hover{
        box-shadow: 10px 10px 20px rgba(0,0,0,0.2);
    }
}
`;

export default Cards