import axios from 'axios';
import { GET_ITEMS_FROM_API, showItems } from '../actions/items';

const apiMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_ITEMS_FROM_API) {
    axios.get('http://orianeberti-server.eddi.cloud/projet-13-ultimatelist-back/public/api/items')
      .then((response) => {
        // const actionToDispatch = showItems(response.data);
        // store.dispatch(actionToDispatch);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  next(action);
};

export default apiMiddleware;
