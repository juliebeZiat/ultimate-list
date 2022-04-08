/* eslint-disable import/prefer-default-export */

/**
 *  create an array of items where slug correspond to item.mode
 * @param {Array} itemList - every items
 * @param {string} searchedMode - mode's slug
 * @return {Object} - item found
 */
export function findItemsByMode(itemList, searchedMode) {
  const items = itemList.filter((item) => item.mode.name === searchedMode);
  return items;
}
