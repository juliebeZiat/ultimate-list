import { SHOW_ITEMS } from '../actions/items';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_ITEMS:
      return {
        ...state,
        list: action.items,
      };

    default:
      return state;
  }
};

export default reducer;
