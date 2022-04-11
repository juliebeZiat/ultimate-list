import { SHOW_USER_ITEMS } from '../actions/userItems';

export const initialState = {
  user_list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_USER_ITEMS:
      return {
        ...state,
        user_list: action.userItems,
      };

    default:
      return state;
  }
};

export default reducer;
