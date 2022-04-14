// == Import dependencies
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

// == Import actions
import {
  CHANGE_LOGIN_FIELD,
  SAVE_USER_DATA,
  TOGGLE_USER_SETTINGS_OPEN,
  LOADER_ON,
  VERIFY_USERTOKEN_IN_LOCALSTORAGE,
  DECODE_TOKEN_TO_SAVE_USERNAME,
  LOG_OUT,
} from '../actions/login';

export const initialState = {
  username: '',
  password: '',
  token: null,
  logged: false,
  isSettingsOpen: false,
  loader: false,
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
        loader: false,
      };

    case TOGGLE_USER_SETTINGS_OPEN:
      return {
        ...state,
        isSettingsOpen: !state.isSettingsOpen,
      };

    case LOADER_ON:
      return {
        ...state,
        loader: !state.loader,
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
          username: jwt_decode(action.token).username,
        };
      }
      return {
        ...state,
        username: '',
      };

    case LOG_OUT:
      return {
        ...state,
        logged: false,
      };

    default:
      return state;
  }
};

export default reducer;
