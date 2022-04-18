import PropTypes from 'prop-types';

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
import { cssProgressHeaderBySlug } from 'src/functions/lists';

// == Import actions
import { changeUserItemStatus } from 'src/actions/userItems';

const UserItemsList = ({ optionsStatus }) => {
  // get the user_items store in state
  const userItems = useSelector((state) => state.userItems.user_list);
  // get the url param
  const { slug } = useParams();
  // sort user_items by slug/mode
  const itemsFiltered = findItemsByMode(userItems, slug);

  const dispatch = useDispatch();

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
  );
};

UserItemsList.propTypes = {
  /** array of every status label et their value */
  optionsStatus: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};

// == Export
export default UserItemsList;
