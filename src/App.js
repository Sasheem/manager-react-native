import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello, World
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
