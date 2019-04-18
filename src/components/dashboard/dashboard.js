import React, { Component } from 'react';
export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : 'test',
      password: 'test'
    };
  }

  render() {
    return (
        <div>Dashboard</div>
    );
  }
}