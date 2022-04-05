// == Import style
import './signUp.scss';

import { Link } from 'react-router-dom';

const SignUp = () => (
  <div className="sign">

    <div className="sign-header">
      <div className="sign-header-title">Bienvenue sur <span className="sign-header-title-bold">Ultimate List</span></div>
      <div className="sign-header-buttons">
        <Link to="/connexion">
          <button type="button" className="sign-header-buttons-switch">Connexion</button>
        </Link>
        <button type="button" className="sign-header-buttons-switch active">Inscription</button>
      </div>
    </div>

    <form className="sign-form">
      <div className="sign-form-input username">
        <label htmlFor="username">Nom d'utilisateur
          <input type="text" id="username" name="username" />
        </label>
      </div>
      <div className="sign-form-input email">
        <label htmlFor="username">E-mail
          <input type="email" id="email" name="email" />
        </label>
      </div>
      <div className="sign-form-input password">
        <label htmlFor="password">Mot de passe
          <input type="password" id="password" name="password" />
        </label>
      </div>

      <button className="sign-form-submit" type="submit">Lets' go !</button>
    </form>

  </div>
);

// == Export
export default SignUp;
