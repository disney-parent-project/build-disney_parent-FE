import React, { Component } from 'react';
import axios from 'axios';
export default class BusinessSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
		fullName: '',
		username : 'test',
		password: 'test',
		passwordConfirm: 'test',
		nameOrBusiness: '',
		volunteerCount: ''
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
					this.setState({secondSignupPage: 1});
					this.props.auth();
				} else {
					const error = new Error(res.error);
					throw error;
				}
			})
			.catch(err => {
				console.error(err);
				alert('error: signup failed');
			});
		} else {
			console.log("passwords do not match")
		}
  }

  render() {
    return (
			<div>
				<form onSubmit={this.onSubmit}>
					<label htmlFor="fullName">Full Name</label>
					<input
						type="text"
						name="fullName"
						placeholder="Enter Full Name"
						value={this.state.fullName}
						onChange={this.handleInputChange}
					/>
					<label htmlFor="username">Email Address</label>
					<input
						type="text"
						name="username"
						placeholder="Enter E-mail"
						value={this.state.username}
						onChange={this.handleInputChange}
					/>
					<label htmlFor="username">Password</label>
					<input
						type="password"
						name="password"
						placeholder="Enter Password"
						value={this.state.password}
						onChange={this.handleInputChange}
					/>
					<label htmlFor="username">Confirm Password</label>
					<input
						type="password"
						name="passwordConfirm"
						placeholder="Confirm Password"
						value={this.state.passwordConfirm}
						onChange={this.handleInputChange}
					/>
					<label htmlFor="username">Name Or Business</label>
					<input
						type="text"
						name="nameOrBusiness"
						placeholder="Confirm Password"
						value={this.state.passwordConfirm}
						onChange={this.handleInputChange}
					/>
					<label htmlFor="username">Number Of Volunteers</label>
					<input
						type="text"
						name="volunteerCount"
						placeholder="Confirm Password"
						value={this.state.passwordConfirm}
						onChange={this.handleInputChange}
					/>
					<button>Submit</button>
				</form>
			</div>
    );
  }
}