// == Import Component
import { Link } from 'react-router-dom';

// == Import style
import './home.scss';
import Videogame from 'src/assets/icons/videogame.svg';
import Podcast from 'src/assets/icons/podcast.svg';

const HomeLogin = () => (
  <div className="home-login">
    <h3 className="home-login-title">Choisissez le type de <span>liste</span> que vous souhaitez créer ou modifier</h3>
    <div className="home-login-mode">
      <Link to="/jeuxvideo/liste">
        <div className="home-login-mode-videogame">
          <img className="home-login-mode-videogame-icon" src={Videogame} alt="icone jeux video" />
          <p className="mode-title">Jeux vidéo</p>
        </div>
      </Link>

      <Link to="/podcasts/liste">
        <div className="home-login-mode-podcast">
          <img className="home-login-mode-podcast-icon" src={Podcast} alt="icone podcast" />
          <p className="mode-title">Podcasts</p>
        </div>
      </Link>
    </div>
  </div>
);

// == Export
export default HomeLogin;
