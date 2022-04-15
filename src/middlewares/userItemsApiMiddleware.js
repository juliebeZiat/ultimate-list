import axios from 'axios';
import {
  GET_USER_ITEMS_FROM_API,
  showUserItems,
  addItemToUserList,
  SEND_ITEM_TO_API,
} from '../actions/userItems';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_ITEMS_FROM_API:
      axios.get('http://orianeberti-server.eddi.cloud/projet-13-ultimatelist-back/public/api/list_items')
        .then((response) => {
          // console.log('Api response list_items:', response.data);

          const actionToDispatch = showUserItems(response.data);
          store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case SEND_ITEM_TO_API:
      axios.post(
        'http://orianeberti-server.eddi.cloud/projet-13-ultimatelist-back/public/api/list_items/create',
        {
          newItem: store.getState().items.list.id,
          // mode: store.getState().modes.id,
          // user: store.getState().user.id,
        },
      )
        .then((response) => {
          const actionToDispatch = addItemToUserList(response.data);
          store.dispatch(actionToDispatch);
          console.log('Api add:', response);
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
