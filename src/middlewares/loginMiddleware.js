import axios from 'axios';
import { loaderOff } from '../actions/loader';

import { logInFail, LOG_IN, saveUserData } from '../actions/login';

const api = axios.create({
  baseURL: 'http://orianeberti-server.eddi.cloud/projet-13-ultimatelist-back/public/api',
});

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      api.post(
        // URL
        '/login_check',
        // données
        {
          username: store.getState().login.username,
          password: store.getState().login.password,
        },
      )
        .then((response) => {
          // we save token in localStorage in order to stay auth when page gets refresh
          localStorage.setItem('user_token', response.data.token);

          store.dispatch(saveUserData(response.data.token));

          api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(logInFail());
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

export default loginMiddleware;
