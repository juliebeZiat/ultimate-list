import {
  SHOW_USER_ITEMS,
  FILTER_USER_ITEMS_BY_STATUS,
  CHANGE_USER_ITEM_STATUS,
  SAVE_CHANGE_STATUS,
  SAVE_ITEM_ADDED,
  CURRENT_ITEM_CLICKED,
  SHOW_ITEM_DETAILS,
  CLOSE_ITEM_DETAILS,
  SHOW_RECO,
  REMOVE_RECO_ITEM,
  UPDATE_USER_LIST_STATUS,
} from '../actions/userItems';

export const initialState = {
  user_list: [],
  newItem: [],
  recos: [],
  item: '',
  item_status: '',
  newStatus: '',
  isItemModalOpen: false,
  itemCliked: {},
};

const reducer = (state = initialState, action = {}) => {
  // var used in case UPDATE_USER_LIST_STATUS
  const indexItemToUpdate = state.user_list.findIndex((item) => item.id === action.itemId);
  const newUserList = [...state.user_list];

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

    case CURRENT_ITEM_CLICKED:
      return {
        ...state,
        itemCliked: state.user_list.find((item) => item.id === action.itemClickedId),
      };

    case SHOW_ITEM_DETAILS:
      return {
        ...state,
        isItemModalOpen: true,
      };

    case CLOSE_ITEM_DETAILS:
      return {
        ...state,
        isItemModalOpen: false,
      };

    case SHOW_RECO:
      return {
        ...state,
        recos: action.reco,
      };

    case REMOVE_RECO_ITEM:
      return {
        ...state,
        recos: state.recos.filter(((reco) => reco.id !== action.itemId)),
      };

    case UPDATE_USER_LIST_STATUS:
      newUserList[indexItemToUpdate].item_status = action.newStatus;
      return {
        ...state,
        user_list: newUserList,
      };

    default:
      return state;
  }
};

export default reducer;
