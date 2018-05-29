import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeListReducer from './EmployeeListReducer';

export default combineReducers({
  // this is the property of state that I will be producing
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeListReducer
});
