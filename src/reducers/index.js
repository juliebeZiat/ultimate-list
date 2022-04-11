import { combineReducers } from 'redux';

import itemsReducer from './items';
import usersItemsReducer from './userItems';
import modesReducer from './modes';

const rootReducer = combineReducers({
  items: itemsReducer,
  userItems: usersItemsReducer,
  modes: modesReducer,
});

export default rootReducer;
