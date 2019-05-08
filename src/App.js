import React, { Component } from 'react';
import LP from './components/lp/landing_page';
import Login from './components/login/login';
import ParentSignup from './components/signup/ParentSignup';
import BusinessSignup from './components/signup/BusinessSignup';
import ParentProfile from './components/profile/parent_profile';
import Requests from './components/requests/Requests';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    isAuthenticated: 0
  }
  authenticate = () => {
    this.setState({isAuthenticated: 1})
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={LP} exact={true} />
          <Route path='/login' exact={true} render={(props) => <Login {...props} authenticate={() => this.authenticate()} />}  />
          <Route path='/signup' exact={true} component={ParentSignup}/>
          <Route path='/parentprofile' exact={true} component={ParentProfile}/>
          <Route path='/business_signup' exact={true} component={BusinessSignup}/>
          <Route path='/requests' exact={true} component={Requests}/>
          <Redirect to='/' />
        </Switch>
      </Router>
    );
  }
}

export default App;
