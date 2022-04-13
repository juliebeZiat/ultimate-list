import { combineReducers } from 'redux';

import itemsReducer from './items';
import usersItemsReducer from './userItems';
import modesReducer from './modes';
import loginReducer from './login';
import userReducer from './user';
import signupReducer from './signup';

const rootReducer = combineReducers({
  items: itemsReducer,
  userItems: usersItemsReducer,
  modes: modesReducer,
  login: loginReducer,
  user: userReducer,
  signup: signupReducer,
});

export default rootReducer;
