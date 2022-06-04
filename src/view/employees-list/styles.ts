import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  nameWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  tableHead: {
    background: theme.palette.grey[700],
  },
  toolBarTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    fontSize: theme.spacing(6),
  },
  dataStateWrapper: {
    height: '506px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateText: {
    color: '#747474db',
  },
}));
