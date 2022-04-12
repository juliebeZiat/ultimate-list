/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import style
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './login.scss';
import { changeLoginField, logIn } from '../../actions/login';
import Field from '../Field';

const Login = () => {
  const userLoginValue = useSelector((state) => state.login.userLogin);
  const passwordValue = useSelector((state) => state.login.password);

  const dispatch = useDispatch();

  return (
    <div className="connexion">

      <div className="connexion-header">
        <h1 className="connexion-header-title">Bienvenue sur <span className="connexion-header-title-bold">Ultimate List</span></h1>
        <div className="connexion-header-buttons">
          <button type="button" className="connexion-header-buttons-switch active">Connexion</button>
          <Link to="/inscription">
            <button type="button" className="connexion-header-buttons-switch">Inscription</button>
          </Link>
        </div>
      </div>

      <form
        className="connexion-form"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(logIn());
        }}
      >
        <div className="connexion-form-input username">
          <label htmlFor="username">E-mail ou nom d'utilisateur
            <Field
              identifier="userLogin"
              placeholder="louloutedu94@hotmail.fr"
              label="Email"
              value={userLoginValue}
              changeField={(identifier, newValue) => {
                dispatch(changeLoginField(identifier, newValue));
                // console.log(`changeField, identifier=${identifier}, newValue=${newValue}`);
              }}
            />
            <Field
              identifier="password"
              placeholder="coucou"
              label="Mot de passe"
              type="password"
              value={passwordValue}
              changeField={(identifier, newValue) => {
                dispatch(changeLoginField(identifier, newValue));
                // console.log(`changeField, identifier=${identifier}, newValue=${newValue}`);
              }}
            />
          </label>
        </div>

        <button className="connexion-form-submit" type="submit">Lets' go !</button>
      </form>

    </div>
  );
};

export default Login;
