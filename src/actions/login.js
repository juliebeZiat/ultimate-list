// changer la valeur de l'un des champs du formulaire de login
export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const TOGGLE_USER_SETTINGS_OPEN = 'TOGGLE_USER_SETTINGS_OPEN';
export const VERIFY_USERTOKEN_IN_LOCALSTORAGE = 'VERIFY_USERTOKEN_IN_LOCALSTORAGE';
export const DECODE_TOKEN_TO_SAVE_USERNAME = 'DECODE_TOKEN_TO_SAVE_USERNAME';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';

// Action to control reading and writing into the component <Login />
export const changeLoginField = (name, newValue) => ({
  type: CHANGE_LOGIN_FIELD,
  name: name,
  value: newValue,
});

// Action used in the loginMiddleware with an axios request post
export const logIn = () => ({
  type: LOG_IN,
});

// Action to save the data of a user and its token
export const saveUserData = (token) => ({
  type: SAVE_USER_DATA,
  token: token,
});

// Action to show or unshow the component <User /> (profile settings)
export const toggleUserSettingsOpen = () => ({
  type: TOGGLE_USER_SETTINGS_OPEN,
});

// Verify the token in Local Storage to allow a user to stay connect even when the user close app
export const verifyUsertokenInLocalstorage = (localStorageToken) => ({
  type: VERIFY_USERTOKEN_IN_LOCALSTORAGE,
  localStorageToken: localStorageToken,
});

// Decode a token with JWT to fetch and save its username
export const decodeTokenToSaveUsername = (token) => ({
  type: DECODE_TOKEN_TO_SAVE_USERNAME,
  token: token,
});

// Action to allow user to logout
export const logOut = () => ({
  type: LOG_OUT,
});

// Action to display error messages when a user send wrong information
export const logInFail = () => ({
  type: LOG_IN_FAIL,
});
