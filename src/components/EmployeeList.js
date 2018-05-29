import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EmployeeList extends Component {
  render() {
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}

export default EmployeeList;

/*
  What To do
  -figure out how to fetch from firebase
  -get them in app state
  -show them to user in a styled way

  1. make action creator to fetch list of employees
  2. new reducer to store that list
  3. come back to employee list and actually render the list
*/
