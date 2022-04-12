import { CHANGE_LOGIN_FIELD } from '../actions/login';

export const initialState = {
  userLogin: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      if (action.name === 'userLogin') {
        return {
          ...state,
          userLogin: action.value,
        };
      }
      // else implicite
      return {
        ...state,
        password: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
