// changer la valeur de l'un des champs du formulaire de login
export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const TOGGLE_USER_SETTINGS_OPEN = 'TOGGLE_USER_SETTINGS_OPEN';

export const changeLoginField = (name, newValue) => ({
  type: CHANGE_LOGIN_FIELD,
  name: name,
  value: newValue,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUserData = (token) => ({
  type: SAVE_USER_DATA,
  token: token,
});

export const toggleUserSettingsOpen = () => ({
  type: TOGGLE_USER_SETTINGS_OPEN,
});
