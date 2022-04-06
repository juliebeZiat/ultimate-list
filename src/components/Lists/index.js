// == Import style
import './lists.scss';
import './add.scss';
import Videogame from 'src/assets/icons/videogame.svg';
import Podcast from 'src/assets/icons/podcast.svg';

// == Import Component
import { Link } from 'react-router-dom';

const Lists = () => (
  <div className="list-header">
    <div className="list-header-menu">
      <Link to="/jeuxvideo/liste">
        <div className="list-header-menu-mode active">
          <img className="list-header-menu-mode-icon" src={Videogame} alt="icone jeu-video" />
        </div>
      </Link>
      <div className="list-header-menu-mode">
        <img className="list-header-menu-mode-icon" src={Podcast} alt="icone podcast" />
      </div>
    </div>

    <div className="list-header-title">
      <div className="list-header-title-mode">
        Jeux vidéo
        {window.location.href === 'http://localhost:8080/jeuxvideo/liste' && <span className="list-header-title-label">15</span>}
      </div>
    </div>
  </div>
);

// == Export
export default Lists;
