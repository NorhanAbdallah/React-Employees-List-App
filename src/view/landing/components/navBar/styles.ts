import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  navBar: {
    display: 'flex',
    height: theme.spacing(18),
    position: 'fixed',
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    zIndex: 1,
  },
  logo: {
    width: theme.spacing(36),
    marginLeft: theme.spacing(5),
  },
}));
