import {
  SHOW_USER_ITEMS,
  FILTER_USER_ITEMS_BY_STATUS,
  ADD_ITEM,
  GET_LISTS_OF_CONNECTED_USER,
  GET_LISTS_OF_CONNECTED_USER_BYMODE,
} from '../actions/userItems';

export const initialState = {
  user_list: [],
  status: '',
  newItem: [],
  item: '',
  connectedUserLists: [],
  connectedUserListsByMode: [],
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

    case ADD_ITEM:
      return {
        ...state,
        newItem: [...state.newItem, action.user_list.item],
      };

    case GET_LISTS_OF_CONNECTED_USER:
      return {
        ...state,
        // eslint-disable-next-line max-len
        connectedUserLists: state.user_list.filter((user) => user.user.username === action.currentUserName),
      };

    case GET_LISTS_OF_CONNECTED_USER_BYMODE:
      return {
        ...state,
        // eslint-disable-next-line max-len
        connectedUserListsByMode: state.connectedUserLists.filter((item) => item.mode.slug === action.currentMode),
      };

    default:
      return state;
  }
};

export default reducer;
