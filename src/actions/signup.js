export const CHANGE_SIGNUP_FIELD = 'CHANGE_SIGNUP_FIELD';
export const REGISTER = 'REGISTER';
export const SAVE_NEW_USER_DATA = 'SAVE_NEW_USER_DATA';

export const changeSignupField = (name, newValue) => ({
  type: CHANGE_SIGNUP_FIELD,
  name: name,
  value: newValue,
});

export const register = () => ({
  type: REGISTER,
});

export const saveNewUserData = () => ({
  type: SAVE_NEW_USER_DATA,
});
