import {
  SHOW_USER_ITEMS,
  FILTER_USER_ITEMS_BY_STATUS,
  USER_ITEMS_BY_MODE,
} from '../actions/userItems';

export const initialState = {
  user_list: [],
  status: '',
  userListByMode: [],
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
        userListByMode: state.user_list.filter((item) => item.mode.name === action.mode),
      };

    case FILTER_USER_ITEMS_BY_STATUS:
      return {
        ...state,
        userListByMode: state.userListByMode.filter((item) => item.item_status === action.status),
      };

    default:
      return state;
  }
};

export default reducer;
