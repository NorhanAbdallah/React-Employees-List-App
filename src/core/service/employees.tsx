import * as API from '../../apis/employees';

import {
  setEmployees,
  setError,
  setIsLoading,
  setIsStateUpdated,
  updateStates,
} from '../store/employeesSlice';
import {Employee} from '../../models/employee';
import {Dispatch} from '@reduxjs/toolkit';

export const fetchEmployees = (dispatch: Dispatch) => {
  dispatch(setIsLoading(true));
  API.getEmployees()
    .then((data: Array<Employee>) => {
      dispatch(setEmployees(data));
    })
    .catch(() => {
      dispatch(setError(true));
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    });
};

export const updateEmployeeState = (dispatch: Dispatch, employee: Employee) => {
  dispatch(updateStates(employee));
  API.updateEmployeeState(employee)
    .then(() => {
      dispatch(setIsStateUpdated(true));
    })
    .catch(() => {
      dispatch(setIsStateUpdated(false));
    });
};
