import React from 'react';
import {Box} from '@material-ui/core';
import {RouteObject, useRoutes} from 'react-router';
import {Paths} from './paths';
import Landing from '../view/landing';

export default function Routes() {
  const routes: RouteObject[] = [
    {
      path: Paths.HOME,
      element: <Landing />,
    },
  ];
  const pages = useRoutes(routes);
  return <Box>{pages}</Box>;
}
