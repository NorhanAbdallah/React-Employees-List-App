import React from 'react';
import {Avatar, Box, Table, TableHead, Typography} from '@mui/material';
import {useStyles} from './styles';
import {employees} from '../../../../data';
import StatesBar from '../states';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import useEmployeesList from './useEmployeesList';

export default function EmployeesList() {
  const classes = useStyles();
  const {
    headCells,
    page,
    emptyRows,
    slicedEmployeesData,
    rowsPerPage,
    handleChangeRowsPerPage,
    handleChangePage,
  } = useEmployeesList({employees});

  return (
    <Box p={10}>
      <Paper>
        <Toolbar className={classes.toolBarTitle}>Employees List</Toolbar>
        <TableContainer>
          <Table>
            <TableHead className={classes.tableHead}>
              <TableRow>
                {headCells.map(headCell => (
                  <TableCell key={headCell.id}>{headCell.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {slicedEmployeesData.map(({employeeId, firstName, lastName, country, avatar}) => {
                return (
                  <TableRow hover tabIndex={-1} key={employeeId}>
                    <TableCell align="left">
                      <Box className={classes.nameWrapper}>
                        <Avatar src={avatar} alt={firstName + lastName} />
                        <Typography ml={2}> {firstName + lastName}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="left">{country}</TableCell>
                    <TableCell align="left">
                      <StatesBar />
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
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
