import { SHOW_USER } from '../actions/user';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_USER:
      return {
        ...state,
        list: action.users,
      };

    default:
      return state;
  }
};

export default reducer;
