import React from 'react';
import {Box} from '@material-ui/core';
import {RouteObject, useRoutes} from 'react-router';
import {Paths} from './paths';
import UsersList from '../view/users-list';

export default function Routes() {
  const routes: RouteObject[] = [
    {
      path: Paths.HOME,
      element: <UsersList />,
    },
  ];
  const pages = useRoutes(routes);
  return <Box>{pages}</Box>;
}
