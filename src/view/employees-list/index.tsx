import React from 'react';
import {Avatar, Box, Table, TableHead, Typography} from '@mui/material';
import {useStyles} from './styles';
import StatesBar from '../../shared/components/states';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import useEmployeesList from './useEmployeesList';
import {useDispatch, useSelector} from 'react-redux';
import {Employee} from '../../models/employee';
import {setIsStateUpdated, State} from '../../core/store/employeesSlice';
import Wrapper from './wrapper';
import CustomSnackbar from '../../shared/components/snackBar';

export default function EmployeesList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const employees = useSelector<{employeesData: State}>(
    state => state.employeesData.employees,
  ) as Employee[];
  const isUpdated = useSelector<{employeesData: State}>(
    state => state.employeesData.isStateUpdated,
  ) as boolean;

  const {headCells, page, emptyRows, slicedEmployeesData, handleChangePage} = useEmployeesList({
    employees,
  });

  return (
    <Box p={10}>
      <Paper>
        <Toolbar className={classes.toolBarTitle}>Employees List</Toolbar>
        <Wrapper employeesData={slicedEmployeesData}>
          <React.Fragment>
            <TableContainer>
              <Table stickyHeader>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    {headCells.map(headCell => (
                      <TableCell key={headCell.id}>{headCell.label}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {slicedEmployeesData.map(employee => {
                    return (
                      <TableRow hover tabIndex={-1} key={employee.employeeId}>
                        <TableCell align="left">
                          <Box className={classes.nameWrapper}>
                            <Avatar
                              src={employee.avatar}
                              alt={employee.firstName + employee.lastName}
                            />
                            <Typography ml={2}>{employee.firstName + employee.lastName}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell align="left">{employee.country}</TableCell>
                        <TableCell align="left">
                          <StatesBar employee={employee} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: 53 * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              count={employees.length}
              rowsPerPage={5}
              page={page}
              rowsPerPageOptions={[]}
              onPageChange={handleChangePage}
            />
          </React.Fragment>
        </Wrapper>
      </Paper>
      <CustomSnackbar
        isOpen={isUpdated}
        hideDuration={5000}
        message={'State is not updated.'}
        severity={'error'}
        onClose={() => dispatch(setIsStateUpdated(false))}
      />
    </Box>
  );
}
