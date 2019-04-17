import React, { Component } from 'react';
import styled from 'styled-components';

const HelpLink = styled.a`
	background: #303eff;
	padding: 2px 10px;
	border-radius: 5px;
	width: 54px;
	height: 20px;
	font-size: 14px;
	color: white;
	text-decoration: none;
	font-family: 'Merienda', cursive;
	text-align: center;
	:visited{
		color: white;
	}
	-moz-box-shadow:    2px 1px 6px black;
  -webkit-box-shadow: 2px 1px 6px black;
  box-shadow:         2px 1px 6px black;
`;

class HelpHeader extends Component {
  render() {
    return (
  		<HelpLink href="/help">Help</HelpLink>
    );
  }
}

export default HelpHeader;
