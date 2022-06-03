import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  navProgress: {
    display: 'table',
    overflow: 'hidden',
    margin: theme.spacing(0),
    width: '100%',
    height: theme.spacing(10),
    border: `2px ${theme.palette.grey[300]}`,
    backgroundColor: `${theme.palette.grey[300]}`,
    '& > div': {
      position: 'relative',
      display: 'table-cell',
      padding: '14px 0',
      color: 'black',
      textAlign: 'center',
      fontSize: '1.125em',
      lineHeight: '1.250em',
      '&.active': {
        backgroundColor: 'red',
        color: 'black',
        '&.arrow': {
          background: `${theme.palette.grey[100]} !important`,
        },
      },
    },
  },
  complete: {
    backgroundColor: '#ede8e8',
    color: 'black',
  },
  arrowWrapper: {
    position: 'absolute',
    top: theme.spacing(0),
    right: theme.spacing(0),
  },
  arrowCover: {
    position: 'absolute',
    overflow: 'hidden',
    width: '24px',
    height: '50px',
  },
  arrow: {
    position: 'absolute',
    left: '-34px',
    zIndex: '2',
    width: '50px',
    height: '50px',
    border: `3px solid ${theme.palette.grey[700]}`,
    background: 'transparent',
    borderRadius: '6px',
    transform: 'rotate(45deg)',
  },
}));
