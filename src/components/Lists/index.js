// == Import style
import './lists.scss';
import './Add/add.scss';
import Videogame from 'src/assets/icons/videogame.svg';
import Podcast from 'src/assets/icons/podcast.svg';

// == Import Component
import { NavLink, useParams } from 'react-router-dom';

// == Import
import { useSelector } from 'react-redux';
import { findMode } from 'src/functions/modes';
import { findItemsByMode } from 'src/functions/items';

const Lists = () => {
  const modesToDisplay = useSelector((state) => state.modes.list);
  const { slug } = useParams();
  const modes = findMode(modesToDisplay, slug);
  const userItems = useSelector((state) => state.userItems.user_list);
  const itemsFiltered = findItemsByMode(userItems, slug);

  return (
    <div className="list-header">
      <div className="list-header-menu">
        <NavLink
          to="/jeuxvideo/liste"
          className={({ isActive }) => (
            isActive ? 'list-header-menu-mode active-videogames' : 'list-header-menu-mode'
          )}
        >
          <img className="list-header-menu-mode-icon" src={Videogame} alt="icone jeu-video" />
        </NavLink>
        <NavLink
          to="/podcasts/liste"
          className={({ isActive }) => (
            isActive ? 'list-header-menu-mode active-podcasts' : 'list-header-menu-mode'
          )}
        >
          <img className="list-header-menu-mode-icon" src={Podcast} alt="icone podcast" />
        </NavLink>
      </div>

      <div className="list-header-title">
        {modes.map((mode) => (
          <h3 className="list-header-title-mode" key={mode.id}>
            {(mode.name).charAt(0).toUpperCase() + (mode.name).slice(1)}
            {window.location.pathname === `/${slug}/liste`
            && (
              <div className="list-header-title-label" style={{ backgroundColor: mode.color }}>
                <span className="list-header-title-label-span">{itemsFiltered.length}</span>
              </div>
            )}
          </h3>
        ))}
      </div>
    </div>
  );
};

// == Export
export default Lists;
