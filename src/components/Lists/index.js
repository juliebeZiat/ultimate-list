// == Import style
import './lists.scss';
import './add.scss';
import Videogame from 'src/assets/icons/videogame.svg';
import Podcast from 'src/assets/icons/podcast.svg';

// == Import Component
import { NavLink } from 'react-router-dom';

const Lists = () => (
  <div className="list-header">
    <div className="list-header-menu">
      <NavLink
        to="/jeuxvideo/liste"
        className={({ isActive }) => (
          isActive ? 'list-header-menu-mode active' : 'list-header-menu-mode'
        )}
      >
        <img className="list-header-menu-mode-icon" src={Videogame} alt="icone jeu-video" />
      </NavLink>
      <NavLink
        to="/podcasts/liste"
        className={({ isActive }) => (
          isActive ? 'list-header-menu-mode active' : 'list-header-menu-mode'
        )}
      >
        <img className="list-header-menu-mode-icon" src={Podcast} alt="icone podcast" />
      </NavLink>
    </div>

    <div className="list-header-title">
      <h3 className="list-header-title-mode">
        Jeux vidéo
        {window.location.href === 'http://localhost:8080/jeuxvideo/liste' && <div className="list-header-title-label"><span className="list-header-title-label-span">15</span></div>}
      </h3>
    </div>
  </div>
);

// == Export
export default Lists;
