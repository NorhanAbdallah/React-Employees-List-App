import React from 'react';
import {Box} from '@material-ui/core';
import {RouteObject, useRoutes} from 'react-router';
import {Paths} from './paths';
import EmployeesList from '../view/employees-list';

export default function Routes() {
  const routes: RouteObject[] = [
    {
      path: Paths.HOME,
      element: <EmployeesList />,
    },
  ];
  const pages = useRoutes(routes);
  return <Box>{pages}</Box>;
}
