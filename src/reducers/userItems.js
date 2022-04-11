import { SHOW_USER_ITEMS, FILTER_ITEMS_STATUS } from '../actions/userItems';

export const initialState = {
  user_list: [],
  status: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_USER_ITEMS:
      return {
        ...state,
        user_list: action.userItems,
      };
    case FILTER_ITEMS_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export default reducer;
