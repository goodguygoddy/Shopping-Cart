import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { signOut } from '../actions/authActions';


const SignedInLinks = (props) => {
  // As in SignIn.jsx we need to use a function that gets as an argument firebase object
  const handleSignOut = () => {
    const { firebase } = props;
    props.signOut(firebase);
  };

  const { profile } = props;

  return(
    <div className="container">
       <ul className="right">
          <li><NavLink to="/">Shop</NavLink></li>
          <li><NavLink to="/cart">My cart</NavLink></li>
          <li><i className="material-icons new badge">shopping_cart</i></li>
          <li><NavLink to="/" className="btn btn-floating teal lighten-1">{profile.initials}</NavLink></li>
          <li><NavLink to="/" onClick={handleSignOut}>Log Out</NavLink></li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: firebase => dispatch(signOut(firebase)),
});

export default compose(
  firebaseConnect(),
  connect(null, mapDispatchToProps)
)(SignedInLinks);
