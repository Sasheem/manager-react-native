import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../actions';
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
    console.log(name, phone, shift);
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);

/*
  What we need to do now
  display info to screen
  customize this version of form
    -form always gets navigated to with an employee in mind
      will load into a reducer
    -another action creator that will update an employee
*/
