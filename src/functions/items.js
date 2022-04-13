/* eslint-disable import/prefer-default-export */

/**
 *  create an array of items where slug correspond to item.mode
 * @param {Array} itemList - every items
 * @param {string} searchedMode - mode's slug
 * @return {Object} - items found
 */
export function findItemsByMode(itemList, searchedMode) {
  const items = itemList.filter((item) => item.mode.slug === searchedMode);
  return items;
}

/**
 *  create an array of items matching the user
 * @param {Array} userList - every items
 * @param {string} currentUserName - mode's slug
 * @return {Object} - items found
 */
export function findItemsByUser(userList, currentUserName) {
  const userListItems = userList.filter((user) => user.user.username === currentUserName);
  return userListItems;
}

// Convert date from JSON timestamp to "Month YYYY"
export function convertDate(dateObject) {
  const date = new Date(dateObject).toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' });
  const dateUppercase = date.charAt(0).toUpperCase() + date.slice(1);
  return dateUppercase;
}

export function findUserItemsByStatus(userItems, statusWanted) {
  const userItemsByStatus = userItems.filter((item) => item.item_status === statusWanted);
  return userItemsByStatus;
}
