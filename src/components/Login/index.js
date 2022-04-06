/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import style
import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => (
  <div className="connexion">

    <div className="connexion-header">
      <div className="connexion-header-title">Bienvenue sur <span className="connexion-header-title-bold">Ultimate List</span></div>
      <div className="connexion-header-buttons">
        <button type="button" className="connexion-header-buttons-switch active">Connexion</button>
        <Link to="/inscription">
          <button type="button" className="connexion-header-buttons-switch">Inscription</button>
        </Link>
      </div>
    </div>

    <form className="connexion-form">
      <div className="connexion-form-input username">
        <label htmlFor="username">E-mail ou nom d'utilisateur
          <input type="text" id="username" name="username" />
        </label>
      </div>
      <div className="connexion-form-input password">
        <label htmlFor="password">Mot de passe
          <input type="password" id="password" name="password" />
        </label>
      </div>

      <button className="connexion-form-submit" type="submit">Lets' go !</button>
    </form>

  </div>
);

export default Login;
