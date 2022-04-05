// == Import style
import { Icon } from 'semantic-ui-react';
import './home.scss';

const HomeLogout = () => (
  <div className="home-logout">
    <div className="home-logout-title">Choisissez le type de <span>liste</span> que vous souhaitez créer ou modifier</div>
    <div className="home-logout-mode">
      <div className="home-logout-mode-videogame">
        <Icon size="huge" name="gamepad" />
        <div className="home-logout-mode-videogame-text">Jeux vidéo</div>
      </div>
      <div className="home-logout-mode-podcast">
        <Icon size="huge" name="podcast" />
        <div className="home-logout-mode-podcast-text">Podcast</div>
      </div>
    </div>
  </div>
);

// == Export
export default HomeLogout;
