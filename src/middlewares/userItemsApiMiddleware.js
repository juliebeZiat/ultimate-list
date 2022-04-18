import axios from 'axios';
import {
  GET_USER_ITEMS_FROM_API,
  showUserItems,
  SEND_ITEM_TO_API,
  saveItemAdded,
} from '../actions/userItems';

const apiMiddleware = (store) => (next) => (action) => {
  // to add an item we need current user connected id
  // so we need to compare the user list store in state to the current username store in state
  const userList = store.getState().user.list;
  const userConnectedUsername = store.getState().login.username;
  const currentUserDatas = userList.find((user) => user.username === userConnectedUsername);

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
          // Data we have to send to the API
          item: {
            id: action.item,
          },
          user: {
            id: currentUserDatas.id,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveItemAdded(response.data));
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
