export const GET_USER_ITEMS_FROM_API = 'GET_USER_ITEMS_FROM_API';
export const SHOW_USER_ITEMS = 'SHOW_USER_ITEMS';
export const FILTER_ITEMS_STATUS = 'FILTER_ITEMS_STATUS';
export const ADD_ITEM = 'ADD_ITEM';

export const getUserItemsFromApi = () => ({
  type: GET_USER_ITEMS_FROM_API,
});

export const showUserItems = (userItems) => ({
  type: SHOW_USER_ITEMS,
  userItems: userItems,
});

export const filterItemsStatus = (status) => ({
  type: FILTER_ITEMS_STATUS,
  status: status,
});

export const addItemToUserList = (item) => ({
  type: ADD_ITEM,
  item: item,
});
