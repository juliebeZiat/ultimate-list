import { useDispatch } from 'react-redux';
// == Import style
import './header.scss';
import { Link } from 'react-router-dom';
import Logo from 'src/assets/logoUl_mini.png';
import ProfilIcon from '../../assets/icons/ProfilIcon.png';

// == Import utils
import { toggleUserSettingsOpen } from '../../actions/login';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="header-image">
        <Link to="/">
          <img className="header-image-img" src={Logo} alt="" />
        </Link>
      </div>
      <button
        className="header-profil"
        type="button"
        onClick={() => {
          // On click on this button, toggle and close the component <User />
          dispatch(toggleUserSettingsOpen());
        }}
      >
        <img className="header-profil-icon" src={ProfilIcon} alt="" />
      </button>
    </div>
  );
};

// == Export
export default Header;
