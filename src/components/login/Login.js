import React, { Component } from 'react';
import axios from 'axios';
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : 'testm@test.com',
      password: '123123123'
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
    axios.post('https://disney-parent-api.herokuapp.com/api/parents/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(res => {
      if (res.status === 200) {
        localStorage.setItem('jwt_token', `${res.data.token}`)
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
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login Below!</h1>
        <input
          type="username"
          name="username"
          placeholder="Enter username"
          value={this.state.username}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
       <input type="submit" value="Submit"/>
      </form>
    );
  }
}