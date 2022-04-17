import {
  SHOW_USER_ITEMS,
  FILTER_USER_ITEMS_BY_STATUS,
  CHANGE_USER_ITEM_STATUS,
} from '../actions/userItems';

export const initialState = {
  user_list: [],
  newItem: [],
  item: '',
  item_status: '',
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
        item_status: action.item_status,
      };

    default:
      return state;
  }
};

export default reducer;
