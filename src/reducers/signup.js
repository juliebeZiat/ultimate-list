import { CHANGE_SIGNUP_FIELD, SAVE_NEW_USER_DATA } from '../actions/signup';

export const initialState = {
  register: false,
  email: '',
  username: '',
  password: '',
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
      };

    default:
      return state;
  }
};

export default reducer;
