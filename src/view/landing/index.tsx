import React from 'react';
import EmployeesList from './components/employees-list';
import {Box} from '@mui/material';
import NavBar from './components/navBar';

export default function Landing() {
  return (
    <Box>
      <NavBar />
      <EmployeesList />
    </Box>
  );
}
