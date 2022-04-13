import { CHANGE_SIGNUP_FIELD } from '../actions/signup';

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

    default:
      return state;
  }
};

export default reducer;
