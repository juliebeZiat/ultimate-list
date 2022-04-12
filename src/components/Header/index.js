// == Import utils
import { useSelector, useDispatch } from 'react-redux';
import { toggleSettingsOpen } from '../../actions/login';

// == Import style
import './header.scss';
import { Link } from 'react-router-dom';
import Logo from 'src/assets/logoUl_mini.png';
import ProfilIcon from '../../assets/icons/ProfilIcon.png';

// eslint-disable-next-line arrow-body-style
const Header = () => {
  const isOpen = useSelector((state) => state.isUserSettingsOpen);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="header-image">
        <Link to="/">
          <img className="header-image-img" src={Logo} alt="" />
        </Link>
      </div>
      <div className="header-profil">
        <img className="header-profil-icon" src={ProfilIcon} alt="" />
      </div>
    </div>
  );
};

// == Export
export default Header;
