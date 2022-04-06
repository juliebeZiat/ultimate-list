// == Import style
import { Link } from 'react-router-dom';
import './home.scss';

const HomeLogout = () => (
  <div className="home-logout">
    <div className="home-logout-buttons">
      <Link to="/connexion"><button type="button">Connexion</button></Link>
      <Link to="/inscription"><button type="button">Inscription</button></Link>
    </div>
  </div>
);

// == Export
export default HomeLogout;
