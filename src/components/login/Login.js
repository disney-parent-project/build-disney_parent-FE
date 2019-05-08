import React, { Component } from 'react';
import axios from 'axios';
import HelpMenu from '../common/help_menu'
import {LoginContainer, LoginHeader, SigninForm, FormContainer, StyledLabel, InputContainer, StyledInput, StyledSubmitInput, ForgotPasswordLink} from './styled.js';

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