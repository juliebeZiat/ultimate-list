import {
  SHOW_ITEMS,
  HIDE_ADD_RECOMMENDATION,
} from '../actions/items';

export const initialState = {
  list: [],
  displayAddReco: true,
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

    default:
      return state;
  }
};

export default reducer;
