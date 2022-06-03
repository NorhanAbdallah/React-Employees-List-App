import React, {useEffect} from 'react';
import EmployeesList from './components/employees-list';
import {Box} from '@mui/material';
import NavBar from '../../shared/components/navBar';
import {useDispatch} from 'react-redux';
import {fetchEmployees} from '../../core/service/employees';

export default function Landing() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchEmployees(dispatch);
  }, [dispatch]);

  return (
    <Box>
      <NavBar />
      <EmployeesList />
    </Box>
  );
}
