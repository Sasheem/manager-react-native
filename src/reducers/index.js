import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
  // this is the property of state that I will be producing
  auth: AuthReducer
});
