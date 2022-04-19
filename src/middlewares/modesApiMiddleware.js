import axios from 'axios';
import { GET_MODE_FROM_API, showMode } from '../actions/modes';

const apiMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_MODE_FROM_API) {
    axios.get(
      'http://orianeberti-server.eddi.cloud/projet-13-ultimatelist-back/public/api/modes',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user_token')}`,
        },
      },
    )
      .then((response) => {
        const actionToDispatch = showMode(response.data);
        store.dispatch(actionToDispatch);
        // .log('Api response modes:', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  next(action);
};

export default apiMiddleware;
