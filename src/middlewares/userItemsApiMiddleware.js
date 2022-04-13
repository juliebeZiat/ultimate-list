import axios from 'axios';
import { GET_USER_ITEMS_FROM_API, showUserItems } from '../actions/userItems';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_ITEMS_FROM_API:
      axios.get('http://orianeberti-server.eddi.cloud/projet-13-ultimatelist-back/public/api/list_items')
        .then((response) => {
          const actionToDispatch = showUserItems(response.data);
          store.dispatch(actionToDispatch);
          console.log('Api response list_items:', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  next(action);
};
export default apiMiddleware;
