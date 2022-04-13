// == Import style
import './signUp.scss';

import { Link } from 'react-router-dom';
import Field from '../Field';

const SignUp = () => (
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
          value=""
          // changeField={(identifier, newValue) => {
          //   dispatch(changeLoginField(identifier, newValue));
          //   // console.log(`changeField, identifier=${identifier}, newValue=${newValue}`);
          // }}
        />
        <Field
          identifier="username"
          label="Nom d'utilisateur"
          value=""
          // changeField={(identifier, newValue) => {
          //   dispatch(changeLoginField(identifier, newValue));
          //   // console.log(`changeField, identifier=${identifier}, newValue=${newValue}`);
          // }}
        />
        <Field
          identifier="password"
          label="Mot de passe"
          type="password"
          value=""
          // changeField={(identifier, newValue) => {
          //   dispatch(changeLoginField(identifier, newValue));
          //   // console.log(`changeField, identifier=${identifier}, newValue=${newValue}`);
          // }}
        />
      </div>

      <button className="sign-form-submit" type="submit">Lets' go !</button>
    </form>

  </div>
);

// == Export
export default SignUp;
