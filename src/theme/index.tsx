import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {lightTheme} from './theme';

interface Props {
  children: React.ReactNode;
}

export default function Theme({children}: Props) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline /> {children}
    </ThemeProvider>
  );
}
