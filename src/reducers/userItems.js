import { SHOW_USER_ITEMS, FILTER_ITEMS_STATUS, ADD_ITEM } from '../actions/userItems';

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
    case ADD_ITEM:
      return {
        ...state,
        user_list: [...state.user_list, action.items],
      };
    default:
      return state;
  }
};

export default reducer;
