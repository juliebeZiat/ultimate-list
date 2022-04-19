// == Import style
import './reco.scss';
import Toggle from 'src/assets/icons/toggle-off.svg';

// == Import utils
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// == Import functions
import { findItemsByMode } from 'src/functions/items';

// == Import actions
import { getUserItemsFromApi, removeRecoItem, sendItemToApi } from '../../../actions/userItems';

// == Import components
import Lists from '../index';
import { loaderOn } from '../../../actions/loader';

// == Composant
const Reco = () => {
  const items = useSelector((state) => state.userItems.recos);
  const { slug } = useParams();
  const itemsFiltered = findItemsByMode(items, slug);
  const dispatch = useDispatch();

  return (
    <div className="reco">
      <Lists />
      <div className="list-header-toggle">
        <NavLink
          to={`/${slug}/liste`}
          className={({ isActive }) => (
            isActive ? 'list-header-toggle-menu active' : 'list-header-toggle-menu'
          )}
          onClick={() => {
            dispatch(getUserItemsFromApi());
            dispatch(loaderOn());
          }}
        >
          Ma liste
        </NavLink>
        <NavLink
          to={`/${slug}/liste`}
          onClick={() => {
            dispatch(getUserItemsFromApi());
            dispatch(loaderOn());
          }}
        >
          <img className="list-header-toggle-icon" src={Toggle} alt="toggle-icon" />
        </NavLink>
        <NavLink
          to={`/${slug}/recommandations`}
          className={({ isActive }) => (
            isActive ? 'list-header-toggle-menu active' : 'list-header-toggle-menu'
          )}
        >
          Recommandations
        </NavLink>
      </div>

      <ul className="add-reco-cards">
        {itemsFiltered.slice(0, 8).map((item) => (
          <li className="add-reco-cards-card" key={item.id}>
            <img className="card-image" src={item.image} alt="" />
            <div className="card-content">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-description">{item.developer}{item.host}</p>
              <div className="card-tags">
                {item.tags.map((tag) => (
                  <span
                    className="card-tag"
                    key={tag.id}
                    style={{ backgroundColor: tag.color }}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
            <button
              className="card-button"
              type="button"
              aria-label="icon plus"
              // On click on the icon plus, add the item selected to the userList
              onClick={() => {
                dispatch(sendItemToApi(item.id));
                dispatch(removeRecoItem(item.id));
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// == Export
export default Reco;
