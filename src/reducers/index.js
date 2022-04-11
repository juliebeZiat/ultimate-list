import { combineReducers } from 'redux';

import itemsReducer from './items';
import usersItemsReducer from './userItems';

const rootReducer = combineReducers({
  items: itemsReducer,
  userItems: usersItemsReducer,
});

export default rootReducer;
