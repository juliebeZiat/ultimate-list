export const GET_USER_ITEMS_FROM_API = 'GET_USER_ITEMS_FROM_API';
export const SHOW_USER_ITEMS = 'SHOW_USER_ITEMS';
export const FILTER_USER_ITEMS_BY_STATUS = 'FILTER_USER_ITEMS_BY_STATUS';
export const USER_ITEMS_BY_MODE = 'USER_ITEMS_BY_MODE';
export const FILTER_ITEMS_STATUS = 'FILTER_ITEMS_STATUS';
export const ADD_ITEM = 'ADD_ITEM';

export const getUserItemsFromApi = () => ({
  type: GET_USER_ITEMS_FROM_API,
});

export const showUserItems = (userItems) => ({
  type: SHOW_USER_ITEMS,
  userItems: userItems,
});

export const filterUserItemsByStatus = (currentStatus) => ({
  type: FILTER_USER_ITEMS_BY_STATUS,
  status: currentStatus,
});

export const userItemsByMode = (currentMode) => ({
  type: USER_ITEMS_BY_MODE,
  mode: currentMode,
});

export const addItemToUserList = (item) => ({
  type: ADD_ITEM,
  item: item,
});
