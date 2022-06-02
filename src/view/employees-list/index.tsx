import React from 'react';
import {Avatar, Box, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material';
import {useStyles} from './styles';
import Logo from '../../utils/assets/logo-workmotion.svg';
import {employees} from '../../data';

export default function EmployeesList() {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.navBar}>
        <img src={Logo} className={classes.logo} alt={'workMotions-logo'} />
      </Box>
      <Box>
        {employees.map(({employeeId, firstName, lastName, country, avatar}) => {
          return (
            <Box key={employeeId}>
              <ListItem alignItems="flex-start" divider>
                <ListItemAvatar>
                  <Avatar alt={firstName + lastName} src={avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={firstName + lastName}
                  color={'primary'}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{display: 'inline'}}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {country}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
