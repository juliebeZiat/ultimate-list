import {
  SHOW_ITEMS,
  CHANGE_INPUT_SEARCH_VALUE,
} from '../actions/items';

export const initialState = {
  list: [],
  displayAddReco: true,
  inputSearchValue: '',
  searchResults: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_ITEMS:
      return {
        ...state,
        list: action.items,
      };

    case CHANGE_INPUT_SEARCH_VALUE:
      return {
        ...state,
        inputSearchValue: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
