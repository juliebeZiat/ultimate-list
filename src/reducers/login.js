// == Import dependencies
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

// == Import actions
import {
  CHANGE_LOGIN_FIELD,
  SAVE_USER_DATA,
  TOGGLE_USER_SETTINGS_OPEN,
  VERIFY_USERTOKEN_IN_LOCALSTORAGE,
  DECODE_TOKEN_TO_SAVE_USERNAME,
  LOG_OUT,
  LOG_IN_FAIL,
  TOGGLE_USER_SETTINGS_CLOSE,
} from '../actions/login';

export const initialState = {
  username: '',
  password: '',
  nickname: '',
  token: null,
  logged: false,
  isSettingsOpen: false,
  errorMessage: false,
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

    case TOGGLE_USER_SETTINGS_CLOSE:
      return {
        ...state,
        isSettingsOpen: false,
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

    case DECODE_TOKEN_TO_SAVE_USERNAME:
    // decode user_token to get the associated username and store it in state
      if (action.token !== null) {
        return {
          ...state,
          nickname: jwt_decode(action.token).username,
        };
      }
      return {
        ...state,
        nickname: '',
      };

    case LOG_OUT:
      return {
        ...state,
        logged: false,
      };

    case LOG_IN_FAIL:
      return {
        ...state,
        errorMessage: true,
      };

    default:
      return state;
  }
};

export default reducer;
