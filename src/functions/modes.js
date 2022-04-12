/* eslint-disable import/prefer-default-export */

/**
 *  create an array of items where slug correspond to item.mode
 * @param {Array} modes - every items
 * @param {string} searchedMode - mode's slug
 * @return {Object} - item found
 */

export function findMode(mode, searchedMode) {
  const modes = mode.filter((item) => item.slug === searchedMode);
  return modes;
}
