import React, { Component } from 'react';
import axios from 'axios';
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: 'test',
      username : 'test@test.com',
      password: 'test',
			passwordConfirm: 'test'
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
		// API call to BE to login to the app
		if (this.state.password === this.state.passwordConfirm) {
			axios.post('https://disney-parent-api.herokuapp.com/api/parents/register', {
				username: this.state.username,
				password: this.state.password
			})
			.then(res => {
				if (res.status === 201) {
					this.props.history.push('/');
				} else {
					const error = new Error(res.error);
					throw error;
				}
			})
			.catch(err => {
				console.error(err);
				alert('Error logging in please try again');
			});
		} else {
			console.log("passwords do not match")
		}
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login Below!</h1>
        <input
          type="fullName"
          name="fullName"
          placeholder="Enter Full Name"
          value={this.state.fullName}
          onChange={this.handleInputChange}
        />
        <input
          type="email"
          name="username"
          placeholder="Enter E-mail"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
				<input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          name="passwordConfirm"
          placeholder="Confirm Password"
          value={this.state.passwordConfirm}
          onChange={this.handleInputChange}
        />
       <input type="submit" value="Submit"/>
      </form>
    );
  }
}