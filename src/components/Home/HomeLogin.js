// == Import Component
import { Link } from 'react-router-dom';

// == Import style
import { Icon } from 'semantic-ui-react';
import './home.scss';

const HomeLogin = () => (
  <div className="home-login">
    <h3 className="home-login-title">Choisissez le type de <span>liste</span> que vous souhaitez créer ou modifier</h3>
    <div className="home-login-mode">
      <Link to="/jeuxvideo/liste">
        <div className="home-login-mode-videogame">
          <Icon className="home-login-mode-videogame-icon" size="huge" name="gamepad" />
          <p className="mode-title">Jeux vidéo</p>
        </div>
      </Link>

      <Link to="/podcasts/liste">
        <div className="home-login-mode-podcast">
          <Icon className="home-login-mode-podcast-icon" size="huge" name="podcast" />
          <p className="mode-title">Podcasts</p>
        </div>
      </Link>
    </div>
  </div>
);

// == Export
export default HomeLogin;
