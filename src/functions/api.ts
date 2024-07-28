const API_URL = 'http://localhost:3001/api';

export function USER_POST() {
  return {
    url: API_URL + '/login',
  };
}

export function USER_GET() {
  return {
    url: API_URL + '/login/user',
  };
}

export function USER_POST_REGISTER() {
  return {
    url: API_URL + '/users',
  };
}
