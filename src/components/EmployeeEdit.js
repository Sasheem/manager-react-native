import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
  componentWillMount() {
    // for each prop in this.props.employee with the key value pairs: id, name, phone and shift
    // arg 1: understand there is an employee model coming into this component
    // arg 2: going to iterate over every property on that object and update our
    // reducer with every property
    _.each(this.props.employee, (value, prop) => {
      // update every property in the emloyeeForm
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    // the uid is an argument we get when from ListItem.js upon navigation
    this.props.employeeSave({
      name, 
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeSave
})(EmployeeEdit);

/*
  What we need to do now
  display info to screen
  customize this version of form
    -form always gets navigated to with an employee in mind
      will load into a reducer
    -another action creator that will update an employee
*/

/*
  make action creator to send updated form data to firebase
*/
