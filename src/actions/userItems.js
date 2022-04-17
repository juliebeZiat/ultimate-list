export const GET_USER_ITEMS_FROM_API = 'GET_USER_ITEMS_FROM_API';
export const SHOW_USER_ITEMS = 'SHOW_USER_ITEMS';
export const FILTER_USER_ITEMS_BY_STATUS = 'FILTER_USER_ITEMS_BY_STATUS';
export const SEND_ITEM_TO_API = 'SEND_ITEM_TO_API';
export const CHANGE_USER_ITEM_STATUS = 'CHANGE_USER_ITEM_STATUS';

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

export const sendItemToApi = (item) => ({
  type: SEND_ITEM_TO_API,
  item: item,
});

export const changeUserItemStatus = (item) => ({
  type: CHANGE_USER_ITEM_STATUS,
  item: item,
});
