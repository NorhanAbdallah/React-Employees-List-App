import React from 'react';
import { Box } from '@mui/material';
import { useStyles } from './styles';
import Logo from '../../assets/fake-logo.png';

export default function NavBar() {
  const classes = useStyles();
  return (
    <Box className={classes.navBar}>
      <img src={Logo} className={classes.logo} alt={'employees-logo'} />
    </Box>
  );
}
