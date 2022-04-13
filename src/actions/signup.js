export const CHANGE_SIGNUP_FIELD = 'CHANGE_SIGNUP_FIELD';

export const changeSignupField = (name, newValue) => ({
  type: CHANGE_SIGNUP_FIELD,
  name: name,
  value: newValue,
});
