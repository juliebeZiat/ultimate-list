import { SHOW_MODE } from '../actions/modes';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_MODE:
      return {
        ...state,
        list: action.modes,
      };

    default:
      return state;
  }
};

export default reducer;
