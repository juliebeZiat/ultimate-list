// == Import react hooks
import { useSelector, useDispatch } from 'react-redux';

// == Import functions
import {
  findItemsByMode,
  convertDate,
  findItemsByUser,
  findUserItemsByStatus,
} from 'src/functions/items';

// == Import style
import Toggle from 'src/assets/icons/toggle-on.svg';
import './statusFilter.scss';

// == Import actions
import { changeStatusFilter } from 'src/actions/items';
import { changeUserItemStatus } from 'src/actions/userItems';

// == Import Component
import { Link, useParams } from 'react-router-dom';
import Lists from '../index';

const StatusFilter = () => {
  // Fetch the userItems
  const userItems = useSelector((state) => state.userItems.user_list);
  const { slug } = useParams();
  // Use this function to get userItems by slug/mode
  const itemsFiltered = findItemsByMode(userItems, slug);

  const dispatch = useDispatch();

  // Variables to convert item_status ids to a string according to the slug
  const statusName = (status) => {
    switch (status) {
      case 0:
      {
        switch (slug) {
          case 'jeuxvideo':
            return 'À jouer';
          case 'podcasts':
            return 'À écouter';
          default: return '';
        }
      }
      case 1: return 'En cours';
      case 2:
      {
        switch (slug) {
          case 'jeuxvideo':
            return 'Fini';
          case 'podcasts':
            return 'Écouté';
          default: return '';
        }
      }
      default: return '';
    }
  };

  // Array used into the <select>
  const optionsStatus = [
    { label: statusName(0), value: 0 },
    { label: statusName(1), value: 1 },
    { label: statusName(2), value: 2 },
  ];

  // Variables for button add
  const addName = () => {
    switch (slug) {
      case 'jeuxvideo': return 'jeu vidéo';
      case 'podcasts': return 'podcast';
      default: return '';
    }
  };

  // to sort items by their status we need :
  // 1. the username of the current connected user
  const currentUser = useSelector((state) => state.login.username);
  // 2. his items lists that we get with his username
  const itemsFilteredByUser = findItemsByUser(itemsFiltered, currentUser);

  // 3. retrieve the actual status filter store in state
  const statusFilter = useSelector((state) => state.items.statusFilter);
  // 4. prepare a list of user items sort by status for each current status
  const UserItemsTodo = findUserItemsByStatus(itemsFilteredByUser, 0);
  const UserItemsDoing = findUserItemsByStatus(itemsFilteredByUser, 1);
  const UserItemsDone = findUserItemsByStatus(itemsFilteredByUser, 2);
  // 5. a function which take the current status in state as a parameter and return a list sorted
  const userListsFilteredByStatus = (status) => {
    switch (status) {
      case 'todo':
        return UserItemsTodo;

      case 'doing':
        return UserItemsDoing;

      case 'done':
        return UserItemsDone;

      default:
        return itemsFilteredByUser;
    }
  };
  // 6. then by clicking on the buttons, the current status in state will change
  // by dispatching the action changeStatusFilter
  // 7. and a .map is done on userListsFilteredByStatus to display the result

  // var for status's button css
  const cssStatusInactive = 'list-header-progress-status-button';
  const cssStatusActive = `${cssStatusInactive}-active`;
  // var for progress status bar css
  let cssProgressHeader = {};
  const cssProgressHeaderBySlug = (currentSlug) => {
    switch (currentSlug) {
      case 'jeuxvideo':
        cssProgressHeader = {
          backgroundColor: '#7068F4',
        };
        return cssProgressHeader;

      case 'podcasts':
        cssProgressHeader = {
          backgroundColor: '#FFA47A',
        };
        return cssProgressHeader;

      default:
        cssProgressHeader = {
          backgroundColor: '#FFA47A',
        };
        return cssProgressHeader;
    }
  };

  return (
    <div className="list">
      <Lists />
      <div className="list-header-toggle">
        <div className="list-header-toggle-menu active">Ma liste</div>
        <img className="list-header-toggle-icon" src={Toggle} alt="toggle-icon" />
        <div className="list-header-toggle-menu">Recommandations</div>
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
            {statusName(0)}
          </button>
          <button
            type="button"
            className={statusFilter === 'doing' ? cssStatusActive : cssStatusInactive}
            onClick={() => {
              dispatch(changeStatusFilter('doing'));
            }}
          >
            {statusName(1)}
          </button>
          <button
            type="button"
            className={statusFilter === 'done' ? cssStatusActive : cssStatusInactive}
            onClick={() => {
              dispatch(changeStatusFilter('done'));
            }}
          >
            {statusName(2)}
          </button>
        </div>
      </div>

      <div className="list-add">
        <Link className="list-add-button-link" to={`/${slug}/ajouter`}>
          <button type="button" className="list-add-button">
            + Ajouter un {addName()}
          </button>
        </Link>
      </div>

      <div className="list-items">
        {userListsFilteredByStatus(statusFilter).map((userItem) => (
          <div className="item" key={userItem.id}>
            <div className="item-content" key={userItem.id}>
              <img className="item-content-image" src={userItem.item.image} alt="miniature-jeu-video" />
              <div className="item-content-detail">
                <div className="item-content-detail-title">{userItem.item.name}</div>
                <div className="item-content-detail-date">Ajouté le {convertDate(userItem.item_added_at)}</div>
                <div className="item-content-detail-status">
                  <select
                    defaultValue={userItem.item_status}
                    style={cssProgressHeaderBySlug(slug)}
                    onChange={(event) => {
                      dispatch(changeUserItemStatus(userItem.id, Number(event.target.value)));
                    }}
                  >
                    {optionsStatus.map((option) => (
                      <option key={option.label} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

// == Export
export default StatusFilter;
