import {
  CHANGE_LOGIN_FIELD, LOADER_ON, SAVE_USER_DATA, TOGGLE_USER_SETTINGS_OPEN,
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

    default:
      return state;
  }
};

export default reducer;
