import { combineReducers } from 'redux';

import itemsReducer from './items';
import usersReducer from './users';
import usersItemsReducer from './userItems';
import modesReducer from './modes';

const rootReducer = combineReducers({
  items: itemsReducer,
  users: usersReducer,
  userItems: usersItemsReducer,
  modes: modesReducer,
});

export default rootReducer;
