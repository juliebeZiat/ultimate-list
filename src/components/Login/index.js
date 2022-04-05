/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import style
import { Form } from 'semantic-ui-react';
import './login.scss';

const Login = () => (
  <div className="connexion">

    <div className="connexion-header">
      <div className="connexion-header-title">Bienvenue sur <span className="connexion-header-title-bold">Ultimate List</span></div>
      <div className="connexion-header-buttons">
        <button type="button" className="connexion-header-buttons-login">Connexion</button>
        <button type="button" className="connexion-header-buttons-signup">Inscription</button>
      </div>
    </div>

    <div className="connexion-form">
      <Form>
        <Form.Field classname="connexion-form-field">
          <label htmlFor="">Username ou e-mail</label>
          <input type="text" placeholder="hello@world.io" />
        </Form.Field>
        <Form.Field classname="connexion-form-field">
          <label htmlFor="">Username ou e-mail</label>
          <input type="password" />
        </Form.Field>
        <button type="submit">Let's go!</button>
      </Form>
    </div>
  </div>
);

export default Login;
