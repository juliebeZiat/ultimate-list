import { SHOW_USER_ITEMS, FILTER_ITEMS_STATUS, ADD_ITEM } from '../actions/userItems';

export const initialState = {
  user_list: [],
  status: '',
  id_mode: 8,
  id_item: 15,
  id_user: 1,
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
        id_mode: action.id_mode,
        id_item: action.id_item,
        id_user: action.id_user,
      };
    default:
      return state;
  }
};

export default reducer;
