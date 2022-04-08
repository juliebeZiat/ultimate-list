import { combineReducers } from 'redux';

import itemsReducer from './items';
import usersReducer from './users';

const rootReducer = combineReducers({
  items: itemsReducer,
  users: usersReducer,
});

export default rootReducer;
