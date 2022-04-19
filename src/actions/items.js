export const GET_ITEMS_FROM_API = 'GET_ITEMS_FROM_API';
export const SHOW_ITEMS = 'SHOW_ITEMS';
export const CHANGE_INPUT_SEARCH_VALUE = 'CHANGE_INPUT_SEARCH_VALUE';
export const CHANGE_STATUS_FILTER = 'CHANGE_STATUS_FILTER';
export const CLEAR_SEARCH_FIELD = 'CLEAR_SEARCH_FIELD';

// Fetch items from API
export const getItemsFromApi = () => ({
  type: GET_ITEMS_FROM_API,
});

// Display the items to front
export const showItems = (items) => ({
  type: SHOW_ITEMS,
  items: items,
});

// Action to control reading and writing to the searchbar in <Add />
export const changeInputSearchValue = (newValue) => ({
  type: CHANGE_INPUT_SEARCH_VALUE,
  value: newValue,
});

// Action to change a status of an item in user list
export const changeStatusFilter = (newFilter) => ({
  type: CHANGE_STATUS_FILTER,
  newFilter: newFilter,
});

// Action to clear the input search
export const clearSearchField = () => ({
  type: CLEAR_SEARCH_FIELD,
});
