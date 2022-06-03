import React from 'react';
import {useStyles} from './styles';
import {$enum} from 'ts-enum-util';
import {States} from '../../../../models/list';
import clsx from 'clsx';
import {updateEmployeeState} from '../../../../core/service/employees';
import {Employee} from '../../../../models/employee';
import {useDispatch} from 'react-redux';

export default function StatesBar({employee}: {employee: Employee}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.navProgress}>
      {$enum(States)
        .getValues()
        .map((defaultState, index) => {
          return (
            <div
              key={index}
              className={defaultState === employee.states ? classes.active : undefined}
              onClick={() => {
                updateEmployeeState(dispatch, {...employee, states: defaultState});
              }}
            >
              {defaultState}
              <div className={classes.arrowWrapper}>
                <div className={classes.arrowCover}>
                  <div
                    className={clsx(classes.arrow, {active: defaultState === employee.states})}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
