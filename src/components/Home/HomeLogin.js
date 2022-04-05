// == Import style
import { Link } from 'react-router-dom';
import './home.scss';

const HomeLogin = () => (
  <div className="home-login">
    <div className="home-login-buttons">
      <Link to="/connexion"><button type="button">Connexion</button></Link>
      <Link to="/inscription"><button type="button">Inscription</button></Link>
    </div>
  </div>
);

// == Export
export default HomeLogin;
