import {
  SHOW_ITEMS,
  HIDE_ADD_RECOMMENDATION,
  CHANGE_INPUT_SEARCH_VALUE,
} from '../actions/items';

export const initialState = {
  list: [],
  displayAddReco: true,
  inputSearchValue: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_ITEMS:
      return {
        ...state,
        list: action.items,
      };

    case HIDE_ADD_RECOMMENDATION:
      return {
        ...state,
        displayAddReco: false,
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
