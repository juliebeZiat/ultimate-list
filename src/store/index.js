import { createStore } from 'redux';

import { devToolsEnhancer } from 'redux-devtools-extension';
import itemsReducer from 'src/reducers/items';

const store = createStore(
  itemsReducer,
  devToolsEnhancer(),
);

export default store;
