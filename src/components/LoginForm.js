import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions/';
import { Card, CardSection, Input, Button } from './common';


class LoginForm extends Component {
  onEmailChange(text) {
    this.prop.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
          />
        </CardSection>
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

// 2nd arg is the action creator we want to bind to LoginForm component
export default connect(null, { emailChanged })(LoginForm);

/*
  Interaction btwn react and redux
  1. user types something
  2. call action creator with new text
  3. action creator returns an action
  4. action is then sent to all reducers in application
  5. reducer calculates new app state
  6. state sent to all components as object
  7. components rerender with new state
  .... wait for the changes
*/
