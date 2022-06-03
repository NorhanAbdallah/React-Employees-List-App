import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  navBar: {
    display: 'flex',
    height: theme.spacing(18),
    position: 'sticky',
    width: '100%',
    zIndex: 1,
    backgroundColor: theme.palette.secondary.main,
  },
  logo: {
    width: theme.spacing(36),
    marginLeft: theme.spacing(5),
  },
}));
