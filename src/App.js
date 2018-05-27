import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBfq_2cjwvrmsT6ztmMZ4MzCQAMWaFlDD0',
      authDomain: 'auth-react-native-4a454.firebaseapp.com',
      databaseURL: 'https://auth-react-native-4a454.firebaseio.com',
      projectId: 'auth-react-native-4a454',
      storageBucket: 'auth-react-native-4a454.appspot.com',
      messagingSenderId: '1018922236642'
    };
    firebase.initializeApp(config);
  }

  render() {
    // 2nd arg is for any initial state we wanted to pass to our redux application
    // 3rd arg is for store enhancers - additonal functionality
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
