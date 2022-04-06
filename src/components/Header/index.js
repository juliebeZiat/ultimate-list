// == Import style
import './header.scss';
import { Link } from 'react-router-dom';
import Logo from 'src/assets/logoUl_mini.png';
import ProfilIcon from '../../assets/ProfilIcon.png';

// eslint-disable-next-line arrow-body-style
const Header = () => {
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
