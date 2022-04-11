import { combineReducers } from 'redux';

import itemsReducer from './items';
import usersReducer from './users';
import usersItemsReducer from './userItems';

const rootReducer = combineReducers({
  items: itemsReducer,
  users: usersReducer,
  userItems: usersItemsReducer,
});

export default rootReducer;
