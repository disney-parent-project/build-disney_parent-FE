import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import HelpButton from '../common/HelpButton';
import login_background from '../../assets/login_bg.jpg';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 8px;
  height: 100vh;
  ::after {
    content: "";
    background:
      linear-gradient(
        rgba(0, 0, 0, 0.54), 
        rgba(0, 0, 0, 0.54)
      ),
      url('${login_background}');
    background-size: cover;
    background-position: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
  };
`;

const LogoTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  font-family: 'Merienda', cursive;
  color: #ffcc00;
`;

const LogoContainer = styled.div`
  margin 10px;
`;

class Login extends Component {
  render() {
    function Logo() {
      // Import result is the URL of your image
      return <img src={logo} alt="Logo" />;
    }
    return (
      <LoginContainer>
        <HelpButton/>
        <LogoTitleWrapper>
          <LogoContainer>
          <Logo />
          </LogoContainer>
          Disney Parent App
        </LogoTitleWrapper>
      </LoginContainer>
    );
  }
}

export default Login;
