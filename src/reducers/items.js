import {
  SHOW_ITEMS,
  CHANGE_INPUT_SEARCH_VALUE,
  CHANGE_STATUS_FILTER,
  CLEAR_SEARCH_FIELD,
  SHOW_RECO,
} from '../actions/items';

export const initialState = {
  list: [],
  displayAddReco: true,
  inputSearchValue: '',
  searchResults: [],
  statusFilter: 'all',
  recos: [],
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

    case CHANGE_STATUS_FILTER:
      return {
        ...state,
        statusFilter: action.newFilter,
      };

    case CLEAR_SEARCH_FIELD:
      return {
        ...state,
        inputSearchValue: '',
      };

    case SHOW_RECO:
      return {
        ...state,
        recos: action.reco,
      };

    default:
      return state;
  }
};

export default reducer;
