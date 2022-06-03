import API from '../adapters/rest';

export function getEmployees() {
  const url = '/users';
  return API.get(url).then(response => {
    return response.data;
  });
}
