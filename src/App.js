import React, { Component } from 'react';
import Login from './components/login/Login';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
