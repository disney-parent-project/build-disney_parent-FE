import React, { Component } from 'react';
import styled from 'styled-components';

const HelpContainer = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
`;

const HelpButton = styled.a`
	position: absolute;
	background: #303eff;
	text-align: center;
	padding: 2px 10px;
	text-decoration: none;
	border-radius: 5px;
	text-decoration: none;
	color: white;
	:visited{
		color: white;
	}
`;

class HelpHeader extends Component {
  render() {
    return (
			<HelpContainer>
				<HelpButton href="help">
					Help
				</HelpButton>
			</HelpContainer>
    );
  }
}

export default HelpHeader;
