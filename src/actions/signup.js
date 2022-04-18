export const CHANGE_SIGNUP_FIELD = 'CHANGE_SIGNUP_FIELD';
export const REGISTER = 'REGISTER';
export const SAVE_NEW_USER_DATA = 'SAVE_NEW_USER_DATA';

// Action to control reading and writing into the component <Signup />
export const changeSignupField = (name, newValue) => ({
  type: CHANGE_SIGNUP_FIELD,
  name: name,
  value: newValue,
});

// Action used in the signupMiddleware with an axios request post
export const register = () => ({
  type: REGISTER,
});

// Action to save the data of a user
export const saveNewUserData = () => ({
  type: SAVE_NEW_USER_DATA,
});
