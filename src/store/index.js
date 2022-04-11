import { createStore, applyMiddleware, compose } from 'redux';

import reducers from 'src/reducers';
import itemsApiMiddleware from 'src/middlewares/itemsApiMiddleware';
import userItemsApiMiddleware from 'src/middlewares/userItemsApiMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    itemsApiMiddleware,
    userItemsApiMiddleware,
  ),
);

const store = createStore(
  reducers,
  enhancers,
);

export default store;
