import React from 'react';
import {HeadCell} from '../../models/list';
import {Employee} from '../../models/employee';

export default function useEmployeesList({employees}: {employees: Array<Employee>}) {
  const headCells: HeadCell[] = [
    {
      id: 'firstName',
      label: 'EMPLOYEE',
    },
    {
      id: 'country',
      label: 'COUNTRY',
    },
    {
      id: 'states',
      label: 'STATUS',
    },
  ];

  const [page, setPage] = React.useState(0);
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * 5 - employees.length) : 0;
  const slicedEmployeesData = employees.slice(page * 5, page * 5 + 5);

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return {
    page,
    emptyRows,
    headCells,
    slicedEmployeesData,
    setPage,
    handleChangePage,
  };
}
