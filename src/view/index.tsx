import React, {useEffect} from 'react';
import EmployeesList from './employees-list';
import NavBar from '../shared/components/navBar';
import {useDispatch, useSelector} from 'react-redux';
import {fetchEmployees} from '../core/service/employees';
import {setError, State} from '../core/store/employeesSlice';
import CustomSnackbar from '../shared/components/snackBar';

export default function Landing() {
  const dispatch = useDispatch();
  const error = useSelector<{employeesData: State}>(state => state.employeesData.error) as boolean;

  useEffect(() => {
    fetchEmployees(dispatch);
  }, [dispatch]);

  return (
    <React.Fragment>
      <NavBar />
      <EmployeesList />
      <CustomSnackbar
        isOpen={error}
        hideDuration={5000}
        message={'Something went wrong.'}
        severity={'error'}
        onClose={() => dispatch(setError(false))}
      />
    </React.Fragment>
  );
}
