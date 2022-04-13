// changer la valeur de l'un des champs du formulaire de login
export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const TOGGLE_USER_SETTINGS_OPEN = 'TOGGLE_USER_SETTINGS_OPEN';
export const LOADER_ON = 'LOADER_ON';
export const VERIFY_USERTOKEN_IN_LOCALSTORAGE = 'VERIFY_USERTOKEN_IN_LOCALSTORAGE';
export const DECODE_TOKEN_TO_SAVE_USERNAME = 'DECODE_TOKEN_TO_SAVE_USERNAME';
export const LOG_OUT = 'LOG_OUT';

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

export const loaderOn = (status) => ({
  type: LOADER_ON,
  status: status,
 });

export const verifyUsertokenInLocalstorage = (localStorageToken) => ({
  type: VERIFY_USERTOKEN_IN_LOCALSTORAGE,
  localStorageToken: localStorageToken,
});

export const decodeTokenToSaveUsername = (token) => ({
  type: DECODE_TOKEN_TO_SAVE_USERNAME,
  token: token,
});

export const logOut = () => ({
  type: LOG_OUT,
});
