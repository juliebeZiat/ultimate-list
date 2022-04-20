import axios from 'axios';
import { loaderOff } from '../actions/loader';

import { errorMessagesSignUpFail, REGISTER, saveNewUserData } from '../actions/signup';
import { createNewUser } from '../actions/user';

const api = axios.create({
  baseURL: 'http://orianeberti-server.eddi.cloud/projet-13-ultimatelist-back/public/api/users',
});

const signupMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER:
      api.post(
        // URL
        '/create',
        // Data we need to send to the API
        {
          email: store.getState().signup.email,
          username: store.getState().signup.username,
          plainPassword: store.getState().signup.password,
        },
      )
        .then((response) => {
          store.dispatch(createNewUser(response.data));
          store.dispatch(saveNewUserData(response.data.token));
          api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
        })
        .catch((error) => {
          store.dispatch(errorMessagesSignUpFail(error.response.data));
        })
        .finally(() => {
          store.dispatch(loaderOff());
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default signupMiddleware;
