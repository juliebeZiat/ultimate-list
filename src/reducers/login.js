import { CHANGE_LOGIN_FIELD, SAVE_USER_DATA } from '../actions/login';

export const initialState = {
  userLogin: '',
  password: '',
  nickname: '',
  token: null,
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

    case SAVE_USER_DATA:
      return {
        ...state,
        nickname: action.nickname,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
