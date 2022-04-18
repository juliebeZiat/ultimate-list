import {
  SHOW_USER_ITEMS,
  FILTER_USER_ITEMS_BY_STATUS,
  CHANGE_USER_ITEM_STATUS,
  SAVE_CHANGE_STATUS,
  SAVE_ITEM_ADDED,
} from '../actions/userItems';

export const initialState = {
  user_list: [],
  newItem: [],
  item: '',
  item_status: '',
  newStatus: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_USER_ITEMS:
      return {
        ...state,
        user_list: action.userItems,
      };

    case FILTER_USER_ITEMS_BY_STATUS:
      return {
        ...state,
        // eslint-disable-next-line max-len
        connectedUserListsByMode: state.connectedUserListsByMode.filter((item) => item.item_status === action.status),
      };

    case CHANGE_USER_ITEM_STATUS:
      return {
        ...state,
        item: action.item,
      };

    case SAVE_CHANGE_STATUS:
      return {
        ...state,
        item_status: action.newStatus,
      };

    case SAVE_ITEM_ADDED:
      return {
        ...state,
        user_list: [...state.user_list, action.newItem],
      };

    default:
      return state;
  }
};

export default reducer;
