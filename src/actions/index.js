import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

// auth a user, takes a request, only after that request succeeds, do we have the info
// we need to dispatch an actions
// new action creator
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

// in order to help clean up code readability in loginUser - helper functions
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.employeeList();
};

/*
  What is redux thunk doing for me above?
  1. action creator called
  2. action creator returns function
  3. redux thunk sees that we return a function and calls it with dispatch
  4. we do our login request
  5. we wait
  6. we wait
  7. request complete, user logged in
  8. .then runs
  9. dispatch our action
*/

/*
  By using redux thunk we expand what we can return from an action creator
  to functions as well
  Returning with an arg of 'dispatch' method
    -we can manually send an action off to all the reducers in our application
      - by using this we can do whatever async action we want
        -logging a user in for example
*/
