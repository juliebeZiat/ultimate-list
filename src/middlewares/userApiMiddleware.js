import axios from 'axios';
import { GET_USER_FROM_API, showUser } from '../actions/user';

const apiMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_USER_FROM_API) {
    axios.get(
      'http://orianeberti-server.eddi.cloud/projet-13-ultimatelist-back/public/api/users',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user_token')}`,
        },
      },
    )
      .then((response) => {
        const actionToDispatch = showUser(response.data);
        store.dispatch(actionToDispatch);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  next(action);
};

export default apiMiddleware;
