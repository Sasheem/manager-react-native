import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  // as soon as component is rendered to device, we attempt to fetch employeeList
  componentWillMount() {
    this.createDataSource();
  }

  createDataSource() {
    this.props.employeesFetch();
  }

  renderRow(employee) {
    return <ListItem employee={employee} />
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderRow}
        keyExtractor={employee => employee.uid}
      />
      // <View>
      //   <Text>Employee List</Text>
      //   <Text>Employee List</Text>
      //   <Text>Employee List</Text>
      //   <Text>Employee List</Text>
      //   <Text>Employee List</Text>
      //   <Text>Employee List</Text>
      // </View>
    );
  }
}

const mapStateToProps = state => {
  // for every key value pair in state.employees
  //   i will take the employee model represented as val
  //   and the user id for that record
  //      then return and object containing all props belonging to employeeModel aka val
  //      and the user id
  // remember the fat arrow function gets called on every key:value pair inside state.employees
  // with that current val, and uid
  // performing the action inside the return stmt
  //    ...creating a new object pushing all the values from user model (name, phone shift)
  //    and also throw the ID on top
  // END RESULT: { shift: 'Monday', name: 'Sa', id: 'as13r2' };
  // we craft the above object for each item in the array
  // we collect all those objects and store them in the const employees
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

/*
  What To do
  -figure out how to fetch from firebase
  -get them in app state
  -show them to user in a styled way

  1. make action creator to fetch list of employees
  2. new reducer to store that list
  3. come back to employee list and actually render the list
*/
