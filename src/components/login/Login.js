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
  margin: 10px;
`;

const Button = styled.a`
  background: #303eff;
	color: white;
	text-decoration: none;
	font-family: 'Merienda', cursive;
	text-align: center;
	:visited{
		color: white;
	}
	-moz-box-shadow:    -4px 2px 10px 1px black;
  -webkit-box-shadow: -4px 2px 10px 1px black;
  box-shadow:         -4px 2px 10px 1px black;
`;

const SignInButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background: green; */
  margin-top: 90px;
  height: 30%;
  justify-content: space-between;
  /* height: */
`;

const SignInButton = styled(Button)`
  height: 37px;
  width: 50%;
`;

const SecondParentSignInButton = styled(Button)`
  
`;

const SignUpButtonWrapper = styled.div`
  
`;

const SignUpButton = styled(Button)`
  
`;

const BusinessSignUpButton = styled(Button)`
  
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
        {/* <SignInButtonWrapper>
          <SignInButton>
            Sign In
          </SignInButton>
          <SecondParentSignInButton>
            Second Parent Sign In
          </SecondParentSignInButton>
        </SignInButtonWrapper>
        <SignUpButtonWrapper>
          <SignUpButton>
            No Account? Sign up Here
          </SignUpButton>
          <BusinessSignUpButton>
            I'm A Business Owner
          </BusinessSignUpButton>
        </SignUpButtonWrapper> */}
      </LoginContainer>
    );
  }
}

export default Login;
