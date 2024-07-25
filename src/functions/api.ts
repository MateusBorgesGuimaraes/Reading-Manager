const API_URL = 'http://localhost:3001/api';

export function USER_POST() {
  return {
    url: API_URL + '/login',
  };
}
