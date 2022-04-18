export const GET_USER_ITEMS_FROM_API = 'GET_USER_ITEMS_FROM_API';
export const SHOW_USER_ITEMS = 'SHOW_USER_ITEMS';
export const FILTER_USER_ITEMS_BY_STATUS = 'FILTER_USER_ITEMS_BY_STATUS';
export const SEND_ITEM_TO_API = 'SEND_ITEM_TO_API';
export const CHANGE_USER_ITEM_STATUS = 'CHANGE_USER_ITEM_STATUS';
export const SAVE_CHANGE_STATUS = 'SAVE_CHANGE_STATUS';
export const SAVE_ITEM_ADDED = 'SAVE_ITEM_ADDED';

// Fetch userList from API
export const getUserItemsFromApi = () => ({
  type: GET_USER_ITEMS_FROM_API,
});

// Display the userList to front
export const showUserItems = (userItems) => ({
  type: SHOW_USER_ITEMS,
  userItems: userItems,
});

// Action to filter items according to their status
export const filterUserItemsByStatus = (currentStatus) => ({
  type: FILTER_USER_ITEMS_BY_STATUS,
  status: currentStatus,
});

// Action to add an item to userList
export const sendItemToApi = (item) => ({
  type: SEND_ITEM_TO_API,
  item: item,
});

export const changeUserItemStatus = (item, status) => ({
  type: CHANGE_USER_ITEM_STATUS,
  item: item,
  item_status: status,
});

export const saveChangeStatus = (status) => ({
  type: SAVE_CHANGE_STATUS,
  newStatus: status,
});

export const saveItemAdded = (item) => ({
  type: SAVE_ITEM_ADDED,
  newItem: item,
});
