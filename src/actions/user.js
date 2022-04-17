export const GET_USER_FROM_API = 'GET_USER_FROM_API';
export const SHOW_USER = 'SHOW_USER';

// Fetch users from API
export const getUserFromApi = () => ({
  type: GET_USER_FROM_API,
});

// Display the users to front
export const showUser = (users) => ({
  type: SHOW_USER,
  users: users,
});
