import { combineReducers } from 'redux';

import itemsReducer from './items';
import usersItemsReducer from './userItems';
import modesReducer from './modes';
import loginReducer from './login';
import userReducer from './user';

const rootReducer = combineReducers({
  items: itemsReducer,
  userItems: usersItemsReducer,
  modes: modesReducer,
  login: loginReducer,
  user: userReducer,
});

export default rootReducer;
