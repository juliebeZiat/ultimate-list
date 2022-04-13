import {
  CHANGE_LOGIN_FIELD,
  SAVE_USER_DATA,
  TOGGLE_USER_SETTINGS_OPEN,
  VERIFY_USERTOKEN_IN_LOCALSTORAGE,
} from '../actions/login';

export const initialState = {
  username: '',
  password: '',
  token: null,
  logged: false,
  isSettingsOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      if (action.name === 'username') {
        return {
          ...state,
          username: action.value,
        };
      }
      // else implicite
      return {
        ...state,
        password: action.value,
      };

    case SAVE_USER_DATA:
      return {
        ...state,
        token: action.token,
        logged: true,
      };

    case TOGGLE_USER_SETTINGS_OPEN:
      return {
        ...state,
        isSettingsOpen: !state.isSettingsOpen,
      };

    case VERIFY_USERTOKEN_IN_LOCALSTORAGE:
      if (action.localStorageToken !== null) {
        return {
          ...state,
          logged: true,
        };
      }
      return {
        ...state,
        logged: false,
      };

    default:
      return state;
  }
};

export default reducer;
