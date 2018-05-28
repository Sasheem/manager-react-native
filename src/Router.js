// define all the different routes a user can make in this app
import React from 'react';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>

      <Stack key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            rightTitle="Add"
            onRight={() => { Actions.employeeCreate() }}
            initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
        </Scene>

      </Stack>

    </Router>
  );
};

export default RouterComponent;
