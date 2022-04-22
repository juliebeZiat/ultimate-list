// == Import react hooks
import { Link, NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// == Import functions
import { cssProgressHeaderBySlug, statusName } from 'src/functions/lists';

// == Import style
import Toggle from 'src/assets/icons/toggle-on.svg';
import './statusFilter.scss';

// == Import actions
import { changeStatusFilter, getItemsFromApi } from 'src/actions/items';
import { loaderOn } from '../../../actions/loader';
import { getReco } from '../../../actions/userItems';

// == Import Component
import Lists from '../index';
import UserItemsList from './UserItemsList';

const StatusFilter = () => {
  const { slug } = useParams();

  const dispatch = useDispatch();

  // Variables for button add
  const addName = () => {
    switch (slug) {
      case 'jeuxvideo': return 'jeu vidéo';
      case 'podcasts': return 'podcast';
      case 'films': return 'film';
      default: return '';
    }
  };

  const statusFilter = useSelector((state) => state.items.statusFilter);

  // var for status's button css
  const cssStatusInactive = 'list-header-progress-status-button';
  const cssStatusActive = `${cssStatusInactive}-active`;

  return (
    <div className="list">
      <Lists />
      <div className="list-header-toggle">
        <NavLink
          to={`/${slug}/liste`}
          className={({ isActive }) => (
            isActive ? 'list-header-toggle-menu active' : 'list-header-toggle-menu'
          )}
          end
        >
          Ma liste
        </NavLink>
        <NavLink
          to={`/${slug}/liste/recommandations`}
          onClick={() => {
            dispatch(getReco());
            dispatch(loaderOn());
          }}
        >
          <img className="list-header-toggle-icon" src={Toggle} alt="toggle-icon" />
        </NavLink>
        <NavLink
          to={`/${slug}/liste/recommandations`}
          className={({ isActive }) => (
            isActive ? 'list-header-toggle-menu active' : 'list-header-toggle-menu'
          )}
          onClick={() => {
            dispatch(getReco());
            dispatch(loaderOn());
          }}
          end
        >
          Recommandations
        </NavLink>
      </div>

      <div className="list-header-progress">
        <div className="list-header-progress-status" style={cssProgressHeaderBySlug(slug)}>
          <button
            type="button"
            className={statusFilter === 'all' ? cssStatusActive : cssStatusInactive}
            onClick={() => {
              dispatch(changeStatusFilter('all'));
            }}
          >
            Tous
          </button>
          <button
            type="button"
            className={statusFilter === 'todo' ? cssStatusActive : cssStatusInactive}
            onClick={() => {
              dispatch(changeStatusFilter('todo'));
            }}
          >
            {statusName(0, slug)}
          </button>
          <button
            type="button"
            className={statusFilter === 'doing' ? cssStatusActive : cssStatusInactive}
            onClick={() => {
              dispatch(changeStatusFilter('doing'));
            }}
          >
            {statusName(1, slug)}
          </button>
          <button
            type="button"
            className={statusFilter === 'done' ? cssStatusActive : cssStatusInactive}
            onClick={() => {
              dispatch(changeStatusFilter('done'));
            }}
          >
            {statusName(2, slug)}
          </button>
        </div>
      </div>

      <div className="list-add">
        <Link className="list-add-button-link" to={`/${slug}/liste/ajouter`}>
          <button
            type="button"
            className="list-add-button"
            onClick={() => {
              dispatch(getItemsFromApi());
              dispatch(getReco());
              dispatch(loaderOn());
            }}
          >
            + Ajouter un {addName()}
          </button>
        </Link>
      </div>

      <UserItemsList />

    </div>
  );
};

// == Export
export default StatusFilter;
