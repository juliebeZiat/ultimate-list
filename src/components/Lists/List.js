// == Import
import { useSelector } from 'react-redux';
import { findItemsByMode, findItemsByUser, convertDate } from 'src/functions/items';

// == Import style
import Toggle from 'src/assets/icons/toggle-on.svg';
import './list.scss';

// == Import Component
import { Link, useParams } from 'react-router-dom';
import Lists from '.';
// import { filterItemsStatus } from '../../actions/userItems';

const List = () => {
  const userItems = useSelector((state) => state.userItems.user_list);
  const { slug } = useParams();
  const itemsFiltered = findItemsByMode(userItems, slug);

  const currentUser = useSelector((state) => state.login.username);
  const itemsFilteredByUser = findItemsByUser(itemsFiltered, currentUser);

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

  const optionsStatus = [
    { label: statusName(0), value: statusName(0) },
    { label: statusName(1), value: statusName(1) },
    { label: statusName(2), value: statusName(2) },
  ];

  // Variables for button add
  const addName = () => {
    switch (slug) {
      case 'jeuxvideo': return 'jeu vidéo';
      case 'podcasts': return 'podcast';
      default: return '';
    }
  };

  // const dispatch = useDispatch();

  const changeStatus = (status) => {
    const newArray = itemsFiltered.filter((item) => item.item_status === status);
    return newArray;
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
            onClick={() => changeStatus(1)}
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
                  <div className="item-content-detail-status">
                    <select
                      value={statusName(userItem.item_status)}
                      onChange={(event) => {
                        console.log(event.target.value, userItem.item_status, userItem.id);
                      }}
                    >
                      {optionsStatus.map((option) => (
                        <option key={option.label} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
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
