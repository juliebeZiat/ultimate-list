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
import './list.scss';

// == Import Component
import { Link, useParams } from 'react-router-dom';
import Lists from '.';

// == Import actions
import { changeStatusFilter } from '../../actions/items';

const List = () => {
  const userItems = useSelector((state) => state.userItems.user_list);
  const { slug } = useParams();
  const itemsFiltered = findItemsByMode(userItems, slug);

  const dispatch = useDispatch();

  // Variables for status
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

  return (
    <div className="list">
      <Lists />
      <div className="list-header-toggle">
        <div className="list-header-toggle-menu active">Ma liste</div>
        <img className="list-header-toggle-icon" src={Toggle} alt="toggle-icon" />
        <div className="list-header-toggle-menu">Recommandations</div>
      </div>

      <div className="list-header-progress">
        <div className="list-header-progress-status">
          <button
            type="button"
            className="list-header-progress-status-button-active"
            onClick={() => {
              dispatch(changeStatusFilter('all'));
            }}
          >
            Tous
          </button>
          <button
            type="button"
            className="list-header-progress-status-button"
            onClick={() => {
              dispatch(changeStatusFilter('todo'));
            }}
          >
            {statusName(0)}
          </button>
          <button
            type="button"
            className="list-header-progress-status-button"
            onClick={() => {
              dispatch(changeStatusFilter('doing'));
            }}
          >
            {statusName(1)}
          </button>
          <button
            type="button"
            className="list-header-progress-status-button"
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
            {userItem.items.map((item) => (
              <div className="item-content" key={item.id}>
                <img className="item-content-image" src={item.image} alt="miniature-jeu-video" />
                <div className="item-content-detail">
                  <div className="item-content-detail-title">{item.name}</div>
                  <div className="item-content-detail-date">Ajouté le {convertDate(userItem.item_added_at)}</div>
                  <div className="item-content-detail-status">{statusName(userItem.item_status)}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  );
};

// == Export
export default List;
