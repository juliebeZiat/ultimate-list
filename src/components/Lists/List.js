// == Import react hooks
import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';

// == Import functions
import {
  findItemsByMode,
  convertDate,
  findItemsByUser,
  // findUserItemsByStatus,
} from 'src/functions/items';

// == Import style
import Toggle from 'src/assets/icons/toggle-on.svg';
import './list.scss';

// == Import Component
import { Link, useParams } from 'react-router-dom';
import Lists from '.';

// == Import actions
import {
  filterUserItemsByStatus,
  // getListsOfConnectedUserBymode,
} from '../../actions/userItems';
import { changeStatusFilter } from '../../actions/items';

const List = () => {
  const userItems = useSelector((state) => state.userItems.user_list);
  const { slug } = useParams();
  const itemsFiltered = findItemsByMode(userItems, slug);
  console.log('user_list :', userItems);

  const dispatch = useDispatch();

  // trying to store the user lists sorted by slug in state but it does infinite loop
  // useEffect(() => {
  //   dispatch(getListsOfConnectedUserBymode(slug));
  // }, []);
  // const userListsBymode = useSelector((state) => state.userItems.connectedUserListsByMode);
  // console.log('liste de lutilisateur connecté par mode:', userListsBymode);

  // const currentUserLists = useSelector((state) => state.userItems.connectedUserLists);
  // console.log('current user lists :', currentUserLists);

  const currentUser = useSelector((state) => state.login.username);
  const itemsFilteredByUser = findItemsByUser(itemsFiltered, currentUser);

  const statusFilter = useSelector((state) => state.items.statusFilter);
  console.log(statusFilter);

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
          <button type="button" className="list-header-progress-status-button-active">Tous</button>
          <button
            type="button"
            className="list-header-progress-status-button"
            onClick={() => {
              dispatch(changeStatusFilter('todo'));
            }}
          >
            {statusName(0)}
          </button>
          <button type="button" className="list-header-progress-status-button">{statusName(1)}</button>
          <button type="button" className="list-header-progress-status-button">{statusName(2)}</button>
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
        {itemsFilteredByUser.map((userItem) => (
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
