export const GET_USER_ITEMS_FROM_API = 'GET_USER_ITEMS_FROM_API';
export const SHOW_USER_ITEMS = 'SHOW_USER_ITEMS';

export const getUserItemsFromApi = () => ({
  type: GET_USER_ITEMS_FROM_API,
});

export const showUserItems = (userItems) => ({
  type: SHOW_USER_ITEMS,
  userItems: userItems,
});
