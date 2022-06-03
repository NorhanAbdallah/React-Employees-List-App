import {getEmployees} from '../../apis/employees';
import {setEmployees, setError, setIsLoading} from '../store/employeesSlice';
import {Employee} from '../../models/employee';
import {Dispatch} from '@reduxjs/toolkit';

export const fetchEmployees = (dispatch: Dispatch) => {
  dispatch(setIsLoading(true));
  getEmployees()
    .then((data: Array<Employee>) => {
      dispatch(setEmployees(data));
    })
    .catch(error => {
      dispatch(setError(error));
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    });
};
