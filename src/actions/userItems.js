export const GET_USER_ITEMS_FROM_API = 'GET_USER_ITEMS_FROM_API';
export const SHOW_USER_ITEMS = 'SHOW_USER_ITEMS';
export const FILTER_USER_ITEMS_BY_STATUS = 'FILTER_USER_ITEMS_BY_STATUS';
export const ADD_ITEM = 'ADD_ITEM';

export const GET_LISTS_OF_CONNECTED_USER = 'GET_LISTS_OF_CONNECTED_USER';
export const GET_LISTS_OF_CONNECTED_USER_BYMODE = 'GET_LISTS_OF_CONNECTED_USER_BYMODE';

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

export const addItemToUserList = (item) => ({
  type: ADD_ITEM,
  item: item,
});

export const getListsOfConnectedUser = (currentUserName) => ({
  type: GET_LISTS_OF_CONNECTED_USER,
  currentUserName: currentUserName,
});

export const getListsOfConnectedUserBymode = (currentMode) => ({
  type: GET_LISTS_OF_CONNECTED_USER_BYMODE,
  currentMode: currentMode,
});
