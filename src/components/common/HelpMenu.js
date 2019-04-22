import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HelpMenu = () => {
	
	const HelpLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15%;
	height: 8%;
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

	return (
			<HelpLink to='/help'>Help</HelpLink>
	)
}

export default HelpMenu
