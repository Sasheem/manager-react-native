/*
  handles email, password entered
  decides if error with auth
  decides if we show spinner to user

  one reducer for all things authentication
  remember reducer has same format everytime
  export default w/ 2 args and switch stmt inside function
*/
// very first time a reducer is called, it needs an initial state
const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

// now we have one piece of state in our application when it first boots up
// can access it state.auth.email
