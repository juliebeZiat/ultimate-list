import { CREATE_NEW_USER, SHOW_USER } from '../actions/user';

export const initialState = {
  list: [],
  user: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_USER:
      return {
        ...state,
        list: action.users,
      };

    case CREATE_NEW_USER:
      return {
        ...state,
        list: [...state.list, action.user],
      };

    default:
      return state;
  }
};

export default reducer;
