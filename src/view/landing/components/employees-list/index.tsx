import React from 'react';
import {Avatar, Box, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material';
import {useStyles} from './styles';
import {employees} from '../../../../data';
import StatesBar from '../states';

export default function EmployeesList() {
  const classes = useStyles();
  return (
    <Box>
      {employees.map(({employeeId, firstName, lastName, country, avatar}) => {
        return (
          <ListItem key={employeeId} alignItems="flex-start" divider>
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
            <StatesBar />
          </ListItem>
        );
      })}
    </Box>
  );
}
