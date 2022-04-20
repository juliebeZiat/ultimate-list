import { CHANGE_SIGNUP_FIELD, ERROR_MESSAGES_SIGN_UP_FAIL, SAVE_NEW_USER_DATA } from '../actions/signup';

export const initialState = {
  register: false,
  email: '',
  username: '',
  password: '',
  loader: false,
  errorMessages: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SIGNUP_FIELD:
      if (action.name === 'email') {
        return {
          ...state,
          email: action.value,
        };
      }
      if (action.name === 'username') {
        return {
          ...state,
          username: action.value,
        };
      }
      return {
        ...state,
        password: action.value,
      };

    case SAVE_NEW_USER_DATA:
      return {
        ...state,
        register: true,
        loader: false,
        email: '',
        username: '',
        password: '',
      };

    case ERROR_MESSAGES_SIGN_UP_FAIL:
      return {
        ...state,
        errorMessages: action.errorMessages,
      };

    default:
      return state;
  }
};

export default reducer;
