import React, {Component} from 'react';
import axios from 'axios';

export default class ParentSignup extends Component {
	state = {
		fullName: '',
		username : '',
		password: '',
		passwordConfirm: '',
		personCount: '',
		adultCount: '',
		childCount: '',
		favoriteParks: '',
		secondSignupPage: 0
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
				{this.state.secondSignupPage === 0 ? 
					<form onSubmit={this.onSubmit}>
						<input
							type="text"
							name="fullName"
							placeholder="Enter Full Name"
							value={this.state.fullName}
							onChange={this.handleInputChange}
						/>
						<input
							type="text"
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
						<button>Submit</button>
					</form>
				: 
					<form onSubmit={this.onSubmit}>
						<label>
							How many people are in your party?
							<select name="personCount" value={this.state.personCount} onChange={this.handleInputChange}>
								<option value="one">One</option>
								<option value="two">Two</option>
								<option value="three">Three</option>
								<option value="four">Four</option>
								<option value="five">Five</option>
							</select>
						</label>
						<label>
							How many adults?
							<select name="adultCount" value={this.state.adultCount} onChange={this.handleInputChange}>
								<option value="one">One</option>
								<option value="two">Two</option>
								<option value="three">Three</option>
								<option value="four">Four</option>
								<option value="five">Five</option>
							</select>
						</label>
						<label>
							How many children?
							<select name="childCount" value={this.state.childCount} onChange={this.handleInputChange}>
								<option value="one">One</option>
								<option value="two">Two</option>
								<option value="three">Three</option>
								<option value="four">Four</option>
								<option value="five">Five</option>
							</select>
						</label>
						<label>
							Choose your top 3 favorite parks
							<select name="favoriteParks" value={this.state.favoriteParks} onChange={this.handleInputChange} multiple>
								<option value="magicKingdom">Magic Kingdom</option>
								<option value="hollywood">Hollywood</option>
								<option value="epcot">Epcot</option>
								<option value="animalKingdom">Animal Kingdom</option>
							</select>
						</label>
						<button>Submit!</button>
					</form>
					}
			</div>
    );
  }
}