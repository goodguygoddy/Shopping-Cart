import authReducer from './authReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  firebase: firebaseReducer
});

export default rootReducer;

// the key name will be the data property on the state object
