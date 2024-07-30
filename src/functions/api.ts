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

export function FOLDER_POST() {
  return {
    url: API_URL + '/folders',
  };
}

export function FOLDERS_GET() {
  return {
    url: API_URL + '/users/userFolders',
  };
}

export function FOLDER_DELETE(id: string) {
  return {
    url: API_URL + '/folders/' + id,
  };
}

export function GET_BOOKS(id: String) {
  return {
    url: API_URL + '/folders/' + id,
  };
}
