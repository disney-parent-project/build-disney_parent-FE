import React, { Component } from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const Hello = () => {
  return (
    <p>Hello</p>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route path="/hello/" component={Hello} exact={true} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
