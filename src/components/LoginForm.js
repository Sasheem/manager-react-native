import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions/';
import { Card, CardSection, Input, Button } from './common';


class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
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

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

// 2nd arg is the action creator we want to bind to LoginForm component
export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);

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
