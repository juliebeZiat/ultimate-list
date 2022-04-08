export const GET_ITEMS_FROM_API = 'GET_ITEMS_FROM_API';
export const SHOW_ITEMS = 'SHOW_ITEMS';

export const getItemsFromApi = () => ({
  type: GET_ITEMS_FROM_API,
});

export const showItems = (items) => ({
  type: SHOW_ITEMS,
  items: items,
});
