/* eslint-disable import/prefer-default-export */

/**
 *  create an array of modes where slug correspond to slug
 * @param {Array} modes - every modes
 * @param {string} searchedMode - mode's slug
 * @return {Object} - item found
 */

export function findMode(modes, searchedMode) {
  const modesToDisplay = modes.filter((mode) => mode.slug === searchedMode);
  return modesToDisplay;
}
