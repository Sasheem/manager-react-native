import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
 } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {

  // gain access to the user currently logged into this application
  const { currentUser } = firebase.auth();

  // don't really need to do anything b/c its purpose is to save data to Firebase
  // using redux thunk to break the rules
  // by exploiting the fact we return a function but not really returning
  // what redux desires
  return (dispatch) => {
    // get access to our firebase db, location where we store our data
    // then make a reference to the path to our json data structure
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
      });
  };
};

// this will be an async action so use redux thunk
export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    // this action creator will watch for the entirety of our applications life cycle
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        // object we use to get a handle of our list of employees
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
