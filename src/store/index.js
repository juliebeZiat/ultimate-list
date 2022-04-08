import { createStore, applyMiddleware, compose } from 'redux';

import itemsReducer from 'src/reducers/items';
import itemsApiMiddleware from 'src/middlewares/itemsApiMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    itemsApiMiddleware,
  ),
);

const store = createStore(
  itemsReducer,
  enhancers,
);

export default store;
