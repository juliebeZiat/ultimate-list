import PropTypes from 'prop-types';

// == Import react hooks
import { useDispatch } from 'react-redux';

// == Import actions
import {
  deleteItemFromUserlist,
  closeDeleteConfirmation,
  closeItemDetails,
} from 'src/actions/userItems';

// Import style
import './deleteConfirmation.scss';

const DeleteConfirmation = ({ itemName, itemId }) => {
  const dispatch = useDispatch();

  return (
    <div className="background-popup">
      <div className="popup">
        <h1 className="popup-title">Êtes vous sûrs de vouloir supprimer <span className="popup-title-itemName">{itemName}</span> de votre liste ?</h1>
        <div className="popup-confirmationButtons">
          <button
            className="popup-confirmationButtons-button"
            type="button"
            onClick={() => {
              dispatch(deleteItemFromUserlist(itemId));
              dispatch(closeDeleteConfirmation());
              dispatch(closeItemDetails());
            }}
          >
            Oui
          </button>

          <button
            className="popup-confirmationButtons-button"
            type="button"
            onClick={() => {
              dispatch(closeDeleteConfirmation());
            }}
          >
            Non
          </button>
        </div>

      </div>
    </div>
  );
};

DeleteConfirmation.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired,
};

export default DeleteConfirmation;
