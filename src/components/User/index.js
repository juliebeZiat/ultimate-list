// == Import style
import './user.scss';
import { Link } from 'react-router-dom';

// eslint-disable-next-line arrow-body-style
const User = () => {
  const isOpen = false;
  return (
    <div className="user">
      {isOpen && (
      <div className="user-toggle">
        <div className="user-toggle-hello"><h4>Coucou [username]</h4></div>
        <div className="user-toggle-disconnect"><Link to="/">Se déconnecter</Link></div>
        <div className="user-toggle-delete"><Link to="/">Supprimer définitivement mon profil</Link></div>
      </div>
      )}
    </div>
  );
};

// == Export
export default User;
