import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { employeesFetch } from '../actions';


class EmployeeList extends Component {
  // as soon as component is rendered to device, we attempt to fetch employeeList
  componentWillMount() {
    this.props.employeesFetch();
  }

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

export default connect(null, { employeesFetch })(EmployeeList);

/*
  What To do
  -figure out how to fetch from firebase
  -get them in app state
  -show them to user in a styled way

  1. make action creator to fetch list of employees
  2. new reducer to store that list
  3. come back to employee list and actually render the list
*/
