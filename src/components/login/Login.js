import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 8px;
  height: 100vh;
  /* background-image: */
`;

const HelpButton = styled.a`
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
`;

const LogoTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  font-family: 'Merienda', cursive;
  color: #ffcc00;
`;

const LogoImage = styled.img`
  background: #CCEEEE;
  width: 30%;
  /* height: auto; */
  height: 60px;
`;



class Login extends Component {
  render() {
    function Logo() {
      // Import result is the URL of your image
      return <img src={logo} alt="Logo" />;
    }
    return (
      <LoginContainer>
        <HelpButton>Help</HelpButton>
        <LogoTitleWrapper>
          <Logo />
          Disney Parent App
        </LogoTitleWrapper>
      </LoginContainer>
    );
  }
}

export default Login;
