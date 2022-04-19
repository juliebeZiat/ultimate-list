// == Import react hooks
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// == Import functions
import {
  findItemsByMode,
  convertDate,
  findItemsByUser,
  findUserItemsByStatus,
} from 'src/functions/items';
import { cssProgressHeaderBySlug, statusName } from 'src/functions/lists';

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

  return (
    <>
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
              <img className="item-content-image" src={userItem.item.image} alt="miniature-jeu-video" />
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
      {isItemModalOpen && <ItemDetails />}
    </>
  );
};

// == Export
export default UserItemsList;
