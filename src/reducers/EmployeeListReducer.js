import {
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      // ...state = all records out of existing object
      // [id] = key is the id of the record we want to update
      // action.payload = updated record itself
      // common in a lot of react-redux apps
      // return { ...state, [id]: action.payload };
      return action.payload;
    default:
      return state;
  }
};
