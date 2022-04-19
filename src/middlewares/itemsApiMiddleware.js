/* eslint-disable no-console */
import axios from 'axios';
import {
  GET_ITEMS_FROM_API, GET_RECO, showItems, showReco,
} from '../actions/items';
import { loaderOff } from '../actions/loader';

const apiMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_ITEMS_FROM_API) {
    axios.get(
      'http://orianeberti-server.eddi.cloud/projet-13-ultimatelist-back/public/api/items',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user_token')}`,
        },
      },
    )
      .then((response) => {
        const actionToDispatch = showItems(response.data);
        store.dispatch(actionToDispatch);

        // console.log('Api response items:', response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        store.dispatch(loaderOff());
      });
  }
  if (action.type === GET_RECO) {
    axios.get(
      'http://orianeberti-server.eddi.cloud/projet-13-ultimatelist-back/public/api/items/recommandations/user',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user_token')}`,
        },
      },
    )
      .then((response) => {
        const actionToDispatch = showReco(response.data);
        store.dispatch(actionToDispatch);

        // console.log('Api response items:', response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        store.dispatch(loaderOff());
      });
  }

  next(action);
};

export default apiMiddleware;
