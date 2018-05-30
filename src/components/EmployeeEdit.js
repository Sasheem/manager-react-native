import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
  render() {
    return (
      <Card>
        <EmplyeeForm />
        <CardSection>
          <Button>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, EmployeeEdit)(EmployeeEdit);

/*
  What we need to do now
  display info to screen
  customize this version of form
    -form always gets navigated to with an employee in mind
      will load into a reducer
    -another action creator that will update an employee
*/
