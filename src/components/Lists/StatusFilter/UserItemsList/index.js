// == Import react hooks
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import WaitingGif from 'src/assets/gif/valerie_no_items.gif';

// == Import functions
import {
  findItemsByMode,
  convertDate,
  findItemsByUser,
  findUserItemsByStatus,
} from 'src/functions/items';
import { cssProgressHeaderBySlug, statusName } from 'src/functions/lists';
import { findMode } from 'src/functions/modes';

// == Import actions
import {
  showItemDetails,
  currentItemClicked,
  saveChangeStatus,
} from 'src/actions/userItems';

import ItemDetails from 'src/components/ItemDetails';

const UserItemsList = () => {
  // get the user_items store in state
  const userItems = useSelector((state) => state.userItems.user_list);
  // get the url param
  const { slug } = useParams();
  // sort user_items by slug/mode
  const itemsFiltered = findItemsByMode(userItems, slug);

  const dispatch = useDispatch();

  // to sort items by their status we need :
  // 1. the username of the current connected user
  const currentUser = useSelector((state) => state.login.nickname);
  // 2. his items lists that we get with his username
  const itemsFilteredByUser = findItemsByUser(itemsFiltered, currentUser);
  console.log(itemsFilteredByUser);

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

  const isItemModalOpen = useSelector((state) => state.userItems.isItemModalOpen);

  // condition to block the scroll when modal is open
  if (isItemModalOpen) {
    document.body.style.overflowY = 'hidden';
  }
  else {
    document.body.style.overflowY = 'scroll';
  }

  // 1. fetch the modes list
  const modesToDisplay = useSelector((state) => state.modes.list);
  // 3. use the function 'findModes' to display items according to the slug (see .map line 58)
  const modes = findMode(modesToDisplay, slug);

  return (
    <>
      {itemsFilteredByUser.length === 0 && (
        modes.map((mode) => (
          <div className="no-item">
            <div className="no-item-message">Tu n'as pas encore de {mode.name.toLowerCase()} dans ta liste !</div>
            <div className="no-item-link">Tu peux en rajouter en cliquant sur <Link to={`/${slug}/liste/ajouter`}>Ajouter un {mode.name.toLowerCase()}</Link>.</div>
            <div className="no-item-link">En manque d'inspiration ? Tu peux aller voir nos <Link to={`/${slug}/liste/recommandations`}>recommandations</Link>.</div>
            <img src={WaitingGif} alt="" />
          </div>
        ))
      )}
      {itemsFilteredByUser.length > 0 && (
      <div className={`${slug}-list-items`}>
        {userListsFilteredByStatus(statusFilter).map((userItem) => (
          <div
            className="item"
            key={userItem.id}
            onClick={() => {
              dispatch(showItemDetails());
              dispatch(currentItemClicked(userItem.id));
              dispatch(saveChangeStatus(userItem.item_status));
            }}
          >
            <div className="item-content" key={userItem.id}>
              <img className="item-content-image" src={userItem.item.image} alt="miniature" />
              <div className="item-content-detail">
                <div className="item-content-detail-title">{userItem.item.name}</div>
                <div className="item-content-detail-date">Ajouté le {convertDate(userItem.item_added_at)}</div>
                <span
                  className="item-content-detail-status"
                  style={cssProgressHeaderBySlug(slug)}
                >
                  {statusName(userItem.item_status, slug)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
      {isItemModalOpen && <ItemDetails />}
    </>
  );
};

// == Export
export default UserItemsList;
