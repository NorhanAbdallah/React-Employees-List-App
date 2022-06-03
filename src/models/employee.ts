import {States} from './list';

export interface Employee {
  firstName: string;
  lastName: string;
  avatar: string;
  states: States;
  country: string;
  employeeId: string;
}
