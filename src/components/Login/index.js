/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import style
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { changeLoginField, loaderOn, logIn } from '../../actions/login';
import Field from '../Field';

const Login = () => {
  const usernameValue = useSelector((state) => state.login.username);
  const passwordValue = useSelector((state) => state.login.password);
  const loginFail = useSelector((state) => state.login.errorMessage);
  const logged = useSelector((state) => state.login.logged);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (logged) {
    navigate('/');
  }

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
          dispatch(loaderOn());
          dispatch(logIn());
        }}
      >
        <div className="connexion-form-input">
          <Field
            identifier="username"
            label="Nom d'utilisateur"
            value={usernameValue}
            changeField={(identifier, newValue) => {
              dispatch(changeLoginField(identifier, newValue));
              // console.log(`changeField, identifier=${identifier}, newValue=${newValue}`);
            }}
          />
          <Field
            identifier="password"
            label="Mot de passe"
            type="password"
            value={passwordValue}
            changeField={(identifier, newValue) => {
              dispatch(changeLoginField(identifier, newValue));
              // console.log(`changeField, identifier=${identifier}, newValue=${newValue}`);
            }}
          />
        </div>

        {loginFail && <div className="errorMessage">Mot de passe ou username incorrect</div>}

        <button
          className="connexion-form-submit"
          type="submit"
        >
          Lets' go !
        </button>
      </form>

    </div>
  );
};

export default Login;
