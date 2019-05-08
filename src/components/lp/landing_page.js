 import React from 'react';
import HelpMenu from '../common/help_menu';
import logo from '../../assets/logo.png';
import {LPContainer, LogoTitleWrapper, LogoContainer, SignInButtonWrapper, SignInButton, SecondParentSignInButton, SignUpButtonWrapper, SignUpButton, BusinessSignUpButton} from './styled';

function Logo() {
    return <img src={logo} alt="Logo" />
}

const LP = () => {
    return (
      <LPContainer>
        <HelpMenu/>
        <LogoTitleWrapper>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          Disney Parent App
        </LogoTitleWrapper>
        <SignInButtonWrapper>
          <SignInButton to='/login'>
            Sign In
          </SignInButton>
          <SecondParentSignInButton to='/secondParentLogin'>
            Second Parent Sign In
          </SecondParentSignInButton>
        </SignInButtonWrapper>
        <SignUpButtonWrapper>
          <SignUpButton to='/signup'>
            No Account? Sign up Here
          </SignUpButton>
          <BusinessSignUpButton to='/business_signup'>
            I'm A Business Owner
          </BusinessSignUpButton>
        </SignUpButtonWrapper>
      </LPContainer>
    );
  }

  export default LP;