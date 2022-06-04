import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {Alert} from '@mui/material';
import {SnackBarProps} from './types';

export default function CustomSnackbar({isOpen, hideDuration, message, onClose}: SnackBarProps) {
  return (
    <Snackbar open={isOpen} onClose={onClose} autoHideDuration={hideDuration}>
      <Alert severity="error">{message}</Alert>
    </Snackbar>
  );
}
