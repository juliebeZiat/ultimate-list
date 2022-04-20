export const GET_USER_ITEMS_FROM_API = 'GET_USER_ITEMS_FROM_API';
export const SHOW_USER_ITEMS = 'SHOW_USER_ITEMS';
export const FILTER_USER_ITEMS_BY_STATUS = 'FILTER_USER_ITEMS_BY_STATUS';
export const SEND_ITEM_TO_API = 'SEND_ITEM_TO_API';
export const CHANGE_USER_ITEM_STATUS = 'CHANGE_USER_ITEM_STATUS';
export const SAVE_CHANGE_STATUS = 'SAVE_CHANGE_STATUS';
export const UPDATE_USER_LIST_STATUS = 'UPDATE_USER_LIST_STATUS';
export const SAVE_ITEM_ADDED = 'SAVE_ITEM_ADDED';
export const CURRENT_ITEM_CLICKED = 'CURRENT_ITEM_CLICKED';
export const SHOW_ITEM_DETAILS = 'SHOW_ITEM_DETAILS';
export const CLOSE_ITEM_DETAILS = 'CLOSE_ITEM_DETAILS';
export const GET_RECO = 'GET_RECO';
export const SHOW_RECO = 'SHOW_RECO';
export const REMOVE_RECO_ITEM = 'REMOVE_RECO_ITEM';
export const DELETE_ITEM_FROM_USERLIST = 'DELETE_ITEM_FROM_USERLIST';

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

// action to send to api the new status of an item
// dispatched in ItemDetails onClick to button "Enregistrer les modifications"
export const changeUserItemStatus = (item, status) => ({
  type: CHANGE_USER_ITEM_STATUS,
  item: item,
  item_status: status,
});

// action to store in state the status we want to use to update an item
// dispatched in ItemDetails onClick to buttons with status's name
// dispatched in UserItemsList onClick to open ItemDetails
export const saveChangeStatus = (status) => ({
  type: SAVE_CHANGE_STATUS,
  newStatus: status,
});

// action to update item_status of an item store in user_list that we use to display UserItemsList
// dispatched in ItemDetails onClick to button "Enregistrer les modifications"
export const updateUserListStatus = (itemId, newStatus) => ({
  type: UPDATE_USER_LIST_STATUS,
  itemId: itemId,
  newStatus: newStatus,
});

export const saveItemAdded = (item) => ({
  type: SAVE_ITEM_ADDED,
  newItem: item,
});

export const currentItemClicked = (itemClickedId) => ({
  type: CURRENT_ITEM_CLICKED,
  itemClickedId: itemClickedId,
});

export const showItemDetails = () => ({
  type: SHOW_ITEM_DETAILS,
});

export const closeItemDetails = () => ({
  type: CLOSE_ITEM_DETAILS,
});

// Fetch reco from API
export const getReco = () => ({
  type: GET_RECO,
});

// Display the reco to front
export const showReco = (reco) => ({
  type: SHOW_RECO,
  reco: reco,
});

// Remove an item in recos array when added
export const removeRecoItem = (recoItemId) => ({
  type: REMOVE_RECO_ITEM,
  itemId: recoItemId,
});

export const deleteItemFromUserlist = (itemId) => ({
  type: DELETE_ITEM_FROM_USERLIST,
  itemId: itemId,
});
