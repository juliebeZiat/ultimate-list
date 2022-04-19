// == Import style
import './lists.scss';
import './Add/add.scss';
import Videogame from 'src/assets/icons/videogame.svg';
import Podcast from 'src/assets/icons/podcast.svg';

// == Import Component
import { NavLink, useParams } from 'react-router-dom';

// == Import
import { useSelector, useDispatch } from 'react-redux';
import { findMode } from 'src/functions/modes';
import { findItemsByMode, findItemsByUser } from 'src/functions/items';
import { clearSearchField } from '../../actions/items';
import { getUserItemsFromApi } from '../../actions/userItems';
import { loaderOn } from '../../actions/loader';

const Lists = () => {
  // Objective: display the modes into the list menu
  // 1. fetch the modes list
  const modesToDisplay = useSelector((state) => state.modes.list);
  // 2. generate the slug (jeuxvideos, podcast)
  const { slug } = useParams();
  // 3. use the function 'findModes' to display items according to the slug (see .map line 58)
  const modes = findMode(modesToDisplay, slug);

  // Objective : show items by mode AND user
  // 1. fetch the items of a user
  const userItems = useSelector((state) => state.userItems.user_list);
  // 2. use the function 'findItemsByMode' to display user items accroding to the slug
  const itemsFiltered = findItemsByMode(userItems, slug);
  // 3. fetch the username of a user
  const currentUser = useSelector((state) => state.login.nickname);
  // 4. get user items according to the slug (itemsFiltered) and the currentUser
  // We want to get this to show the number of items per list (see line 63)
  const itemsFilteredByUser = findItemsByUser(itemsFiltered, currentUser);

  // Change icon title according to its slug
  const changeIconSlug = () => {
    switch (slug) {
      case 'jeuxvideo': return Videogame;
      case 'podcasts': return Podcast;
      default: return '';
    }
  };

  const dispatch = useDispatch();

  return (
    <div className="list-header">
      <div className="list-header-menu">
        <NavLink
          to="/jeuxvideo/liste"
          className={({ isActive }) => (
            isActive ? 'list-header-menu-mode active-videogames' : 'list-header-menu-mode'
          )}
          onClick={() => {
            dispatch(clearSearchField());
            dispatch(getUserItemsFromApi());
            dispatch(loaderOn());
          }}
        >
          <img className="list-header-menu-mode-icon" src={Videogame} alt="icone jeu-video" />
        </NavLink>
        <NavLink
          to="/podcasts/liste"
          className={({ isActive }) => (
            isActive ? 'list-header-menu-mode active-podcasts' : 'list-header-menu-mode'
          )}
          onClick={() => {
            dispatch(clearSearchField());
            dispatch(getUserItemsFromApi());
            dispatch(loaderOn());
          }}
        >
          <img className="list-header-menu-mode-icon" src={Podcast} alt="icone podcast" />
        </NavLink>
      </div>

      <div className="list-header-title">
        {modes.map((mode) => (
          <h3 className="list-header-title-mode" key={mode.id}>
            <img className={`list-header-title-mode-icon-${slug}`} src={changeIconSlug()} alt="" />
            {(mode.name).charAt(0).toUpperCase() + (mode.name).slice(1)}
            {window.location.pathname === `/${slug}/liste`
            && (
              <div className="list-header-title-label" style={{ backgroundColor: mode.color }}>
                <span className="list-header-title-label-span">{itemsFilteredByUser.length}</span>
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
