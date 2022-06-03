import API from '../adapters/rest';
import {Employee} from '../models/employee';

export function getEmployees() {
  const url = '/users';
  return API.get(url).then(response => {
    return response.data;
  });
}
export function updateEmployeeState(employee: Employee) {
  const url = `/users/${employee.employeeId}`;
  return API.put(url, employee).then(response => {
    return response.data;
  });
}
