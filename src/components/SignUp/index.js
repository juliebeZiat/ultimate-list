// == Import style
import './signUp.scss';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Field from '../Field';
import { changeSignupField } from '../../actions/signup';

const SignUp = () => {
  const emailValue = useSelector((state) => state.signup.email);
  const usernameValue = useSelector((state) => state.signup.username);
  const passwordValue = useSelector((state) => state.signup.password);

  const dispatch = useDispatch();

  return (
    <div className="sign">

      <div className="sign-header">
        <h1 className="sign-header-title">Bienvenue sur <span className="sign-header-title-bold">Ultimate List</span></h1>
        <div className="sign-header-buttons">
          <Link to="/connexion">
            <button type="button" className="sign-header-buttons-switch">Connexion</button>
          </Link>
          <button type="button" className="sign-header-buttons-switch active">Inscription</button>
        </div>
      </div>

      <form className="sign-form">
        <div className="sign-form-input">
          <Field
            identifier="email"
            label="Email"
            value={emailValue}
            changeField={(identifier, newValue) => {
              dispatch(changeSignupField(identifier, newValue));
            }}
          />
          <Field
            identifier="username"
            label="Nom d'utilisateur"
            value={usernameValue}
            changeField={(identifier, newValue) => {
              dispatch(changeSignupField(identifier, newValue));
            }}
          />
          <Field
            identifier="password"
            label="Mot de passe"
            type="password"
            value={passwordValue}
            changeField={(identifier, newValue) => {
              dispatch(changeSignupField(identifier, newValue));
            }}
          />
        </div>

        <button className="sign-form-submit" type="submit">Lets' go !</button>
      </form>

    </div>
  );
};

// == Export
export default SignUp;
