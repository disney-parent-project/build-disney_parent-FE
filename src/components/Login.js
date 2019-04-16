import React, { Component } from 'react';
import styled from 'styled-components';
import HelpHeader from '../common/HelpHeader'

const LoginContainer = styled.div`
  width: 100%;
  margin: 16px 8px;
`;

class Login extends Component {
  render() {
    return (
      <LoginContainer>
        <HelpHeader/>
      </LoginContainer>
    );
  }
}

export default Login;
