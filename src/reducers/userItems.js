import {
  SHOW_USER_ITEMS,
  FILTER_USER_ITEMS_BY_STATUS,
  USER_ITEMS_BY_MODE,
  FILTER_ITEMS_STATUS,
  ADD_ITEM,
} from '../actions/userItems';

export const initialState = {
  user_list: [],
  status: '',
  userListByMode: [],
  newItem: [],
  item: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_USER_ITEMS:
      return {
        ...state,
        user_list: action.userItems,
      };

    case USER_ITEMS_BY_MODE:
      return {
        ...state,
        userListByMode: state.user_list.filter((item) => item.mode.slug === action.mode),
      };

    case FILTER_USER_ITEMS_BY_STATUS:
      return {
        ...state,
        userListByMode: state.userListByMode.filter((item) => item.item_status === action.status),
      };
    case ADD_ITEM:
      return {
        ...state,
        newItem: [...state.newItem, action.user_list.item],
      };
    default:
      return state;
  }
};

export default reducer;
