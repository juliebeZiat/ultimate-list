// == Import style
import './signUp.scss';

import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Field from '../Field';
import { changeSignupField, register } from '../../actions/signup';
import { loaderOn } from '../../actions/loader';

const SignUp = () => {
  const emailValue = useSelector((state) => state.signup.email);
  const usernameValue = useSelector((state) => state.signup.username);
  const passwordValue = useSelector((state) => state.signup.password);
  const registerSuccess = useSelector((state) => state.signup.register);

  const errorMessages = useSelector((state) => state.signup.errorMessages);
  const failSignUp = useSelector((state) => state.signup.fail);

  // console.log(errorMessages.email.length);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // If user succeed the registration, redirect to page connexion to connect
  if (registerSuccess) {
    navigate('/connexion');
  }

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

      <form
        className="sign-form"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(loaderOn());
          dispatch(register());
        }}
      >
        <div className="sign-form-input">
          {errorMessages.email !== [''] && <div className="error-message">{errorMessages.email}</div>}
          <Field
            identifier="email"
            label="Email"
            value={emailValue}
            changeField={(identifier, newValue) => {
              dispatch(changeSignupField(identifier, newValue));
            }}
          />
          {failSignUp && <div className="error-message">{errorMessages.username}</div>}
          <Field
            identifier="username"
            label="Nom d'utilisateur"
            value={usernameValue}
            changeField={(identifier, newValue) => {
              dispatch(changeSignupField(identifier, newValue));
            }}
          />
          {failSignUp && <div className="error-message">{errorMessages.plainPassword}</div>}
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
        <button
          className="sign-form-submit"
          type="submit"
        >
          Lets' go !
        </button>
      </form>

    </div>
  );
};

// == Export
export default SignUp;
