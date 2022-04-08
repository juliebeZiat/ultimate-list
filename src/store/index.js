import { createStore, applyMiddleware, compose } from 'redux';

import reducers from 'src/reducers';
import itemsApiMiddleware from 'src/middlewares/itemsApiMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    itemsApiMiddleware,
  ),
);

const store = createStore(
  reducers,
  enhancers,
);

export default store;
