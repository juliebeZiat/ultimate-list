import axios from 'axios';

import { LOG_IN, saveUserData } from '../actions/login';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      axios.post(
        // URL
        'http://orianeberti-server.eddi.cloud/projet-13-ultimatelist-back/public/api/connexion',
        // données
        {
          // ne pas oublier le nom du tiroir ;)
          username: store.getState().login.username,
          password: store.getState().login.password,
        },
      )
        .then((response) => {
          store.dispatch(saveUserData(response.data.pseudo, response.data.token));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default userMiddleware;
