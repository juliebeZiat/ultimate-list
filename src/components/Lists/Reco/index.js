// == Import
import './reco.scss';
import { NavLink, useParams } from 'react-router-dom';
import Toggle from 'src/assets/icons/toggle-off.svg';
import Lists from '../index';

// == Composant
const Reco = () => {
  const { slug } = useParams();

  return (
    <div className="reco">
      <Lists />
      Recommandations
      <div className="list-header-toggle">
        <NavLink
          to={`/${slug}/liste`}
          className={({ isActive }) => (
            isActive ? 'list-header-toggle-menu active' : 'list-header-toggle-menu'
          )}
        >
          Ma liste
        </NavLink>
        <NavLink
          to={`/${slug}/liste`}
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
    </div>
  );
};

// == Export
export default Reco;
