import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HelpLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 24px;
    background: #303eff;
    color: white;
    text-decoration: none;
    font-family: 'Merienda', cursive;
    text-align: center;
    border-radius: 2px;

    :visited{
        color: white;
    }

    -moz-box-shadow:    2px 1px 6px black;
    -webkit-box-shadow: 2px 1px 6px black;
    box-shadow:         2px 1px 6px black;
`;