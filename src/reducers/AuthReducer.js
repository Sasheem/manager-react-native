/*
  handles email, password entered
  decides if error with auth
  decides if we show spinner to user

  one reducer for all things authentication
  remember reducer has same format everytime
  export default w/ 2 args and switch stmt inside function
*/
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS
} from '../actions/types';

// very first time a reducer is called, it needs an initial state
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      // update state object here
      // makes a new object. take all props on existing on the state object
      // and throw them into the one we are creating with { }
      // then defined prop email, give it a value of action.payload
      // then toss it on top of whatever props were on the existing state object
      // it appends to whatever was provided by the ...state
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

// now we have one piece of state in our application when it first boots up
// can access it state.auth.email

// commit -m 'hooked loginUser action to auth reducer'
