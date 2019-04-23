import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import largeMickeyEars from '../../assets/large_mickey_ears.png';
import HelpMenu from '../common/HelpMenu'

export default class Login extends Component {
  state = {
    username : '',
    password: ''
  };

  handleInputChange = (event) => {

    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
    
  }

  onSubmit = (event) => {
    event.preventDefault();
    // API call to BE to login to the app
    axios.post('https://disney-parent-api.herokuapp.com/api/parents/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(res => {
      if (res.status === 200 || res.status === 204) {
        localStorage.setItem('jwt_token', `${res.data.token}`)
        // this.props.authenticate();
        this.props.history.push('/parentprofile');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }
  
  render() {

    return (
      <LoginContainer className='login_container'>
      <HelpMenu/>
        <SigninForm className='signin_form' onSubmit={this.onSubmit}>
            <LoginHeader className='login_header'>Sign In</LoginHeader>
          <FormContainer className='form_container'>
            <InputContainer>
              <StyledLabel for='username'>Email Address</StyledLabel>
              <StyledInput
                type='username'
                name='username'
                placeholder='Enter username'
                value={this.state.username}
                onChange={this.handleInputChange}
                required
              />
            </InputContainer>
            <InputContainer>
              <StyledLabel for='password'>Password</StyledLabel>
              <StyledInput
                type='password'
                name='password'
                placeholder='Enter password'
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
              <ForgotPasswordLink to='/'>Forgot Password? (Out of order)</ForgotPasswordLink>
            </InputContainer>
          </FormContainer>
        <StyledSubmitInput type='submit' value='Submit'/>
        </SigninForm>
      </LoginContainer>
    );
  }
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 8px;
  width: 100vw;
  height: 100vh;
`;

const LoginHeader = styled.h1`
  display: flex;
	font-family: 'Merienda', cursive;
	color: white;
  background: url('${largeMickeyEars}');
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
  width: 100%;
  height: 35%;
`;

const SigninForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 25%;
`;

const StyledLabel = styled.label`
  justify-content: flex-start;
  color: #303eff;
  width: 75%;
  font-family: 'Merienda', cursive;
  font-size: .7rem;
  margin-bottom: 2px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 75%;
  height: 35px;
  border-radius: 3px;
`;

const StyledSubmitInput = styled.input`
  display: flex;
  width: 25%;
  height: 5%;
  border-radius: 100px;
  align-self: center;
  font-weight: bold;
  font-size: 1.1rem;
	font-family: 'Merienda', cursive;
  margin-top: 15%;
  color: white;
  background:
    linear-gradient(to right,
      #303eff, 
      #FFF 300%);
`;

const ForgotPasswordLink = styled(Link)`
  text-align: right;
  width: 75%;
  font-size: .8rem;
`;

// const ImgTag = styled.img`
// `;