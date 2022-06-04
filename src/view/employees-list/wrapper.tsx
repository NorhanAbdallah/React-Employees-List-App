import React from 'react';
import {useSelector} from 'react-redux';
import {State} from '../../core/store/employeesSlice';
import {Box, Typography} from '@mui/material';
import {Employee} from '../../models/employee';
import CircularProgress from '@mui/material/CircularProgress';
import {useStyles} from './styles';

export default function Wrapper({
  children,
  employeesData,
}: {
  children: React.ReactNode;
  employeesData: Employee[];
}) {
  const isLoading = useSelector<{employeesData: State}>(state => state.employeesData.isLoading);
  const classes = useStyles();

  if (isLoading) {
    return (
      <Box className={classes.dataStateWrapper}>
        <CircularProgress color={'secondary'} />
      </Box>
    );
  }

  if (employeesData.length === 0) {
    return (
      <Box className={classes.dataStateWrapper}>
        <Typography className={classes.emptyStateText}>No Employees Found</Typography>
      </Box>
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
}
