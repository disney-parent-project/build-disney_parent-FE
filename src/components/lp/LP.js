import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import login_background from '../../assets/login_bg.jpg';

class Login extends Component {
  render() {

    function Logo() {
      // Import result is the URL of your image
      return <img src={logo} alt="Logo" />;
    }

    return (
      <LPContainer>
        <HelpLink href="/help">Help</HelpLink>
        <LogoTitleWrapper>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          Disney Parent App
        </LogoTitleWrapper>
        <SignInButtonWrapper>
          <SignInButton to="/login">
            Sign In
          </SignInButton>
          <SecondParentSignInButton>
            Second Parent Sign In
          </SecondParentSignInButton>
        </SignInButtonWrapper>
        <SignUpButtonWrapper>
          <SignUpButton to="/signup">
            No Account? Sign up Here
          </SignUpButton>
          <BusinessSignUpButton to="/business_signup">
            I'm A Business Owner
          </BusinessSignUpButton>
        </SignUpButtonWrapper>
      </LPContainer>
    );
  }
}

export default Login;

const LPContainer = styled.div`
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
  font-size: 1.5rem;
  color: #ffcc00;
  margin-bottom: 20px;
`;

const LogoContainer = styled.div`
  margin: 30px 10px 10px 10px;
`;

const RouterLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
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

const SignInButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  height: 60%;
  justify-content: space-between;
`;

const SignInButton = styled(RouterLink)`
  height: 22%;
  width: 58.93%;
  font-weight: bold;
  font-size: 100%;
  background:
      linear-gradient(to right,
        #303eff, 
        #FFF 300%);
`;

const SecondParentSignInButton = styled(RouterLink)`
height: 22%;
  width: 58.93%;
  font-size: 80%;
  background:
      linear-gradient(to left,
        #303eff, 
        #FFF 300%);
`;

const SignUpButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const SignUpButton = styled(RouterLink)`
  width: 48%;
  font-size: 9px;
  height: 20px;
`;

const BusinessSignUpButton = styled(RouterLink)`
  width: 48%;
  font-size: 9px;
  height: 20px;
`;

const HelpLink = styled(RouterLink)`
	width: 15%;
	height: 8%;
	font-size: .8rem;
  padding: auto;
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