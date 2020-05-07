import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';

class App extends Component {
  render() {
    const { auth } = this.props;

    if (auth.isLoaded) {
      return (<BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
          </Switch>
        </div>
      </BrowserRouter>);
    }
    return (null);
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps),
)(App);
