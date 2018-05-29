import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};
// email, phone, and shift fields

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
      .then(() => Actions.pop());
  };
};
