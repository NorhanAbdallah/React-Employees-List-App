import React from 'react';
import {useStyles} from './styles';
import {$enum} from 'ts-enum-util';
import {States} from '../../../../models/list';

export default function StatesBar() {
  const classes = useStyles();
  return (
    <div className={classes.navProgress}>
      {$enum(States)
        .getValues()
        .map(state => {
          return (
            <div key={state} className={classes.complete}>
              {state}
              <div className={classes.arrowWrapper}>
                <div className={classes.arrowCover}>
                  <div className={classes.arrow}></div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
