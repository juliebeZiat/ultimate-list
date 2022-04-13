import { createStore, applyMiddleware, compose } from 'redux';

import reducers from 'src/reducers';
import itemsApiMiddleware from 'src/middlewares/itemsApiMiddleware';
import userItemsApiMiddleware from 'src/middlewares/userItemsApiMiddleware';
import modesApiMiddleware from 'src/middlewares/modesApiMiddleware';
import loginMiddleware from 'src/middlewares/loginMiddleware';
import userApiMiddleware from 'src/middlewares/userApiMiddleware';
import signupApiMiddleware from 'src/middlewares/signupApiMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    itemsApiMiddleware,
    userItemsApiMiddleware,
    modesApiMiddleware,
    loginMiddleware,
    userApiMiddleware,
    signupApiMiddleware,
  ),
);

const store = createStore(
  reducers,
  enhancers,
);

export default store;
