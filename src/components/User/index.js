// == Import style
import './user.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// eslint-disable-next-line arrow-body-style
const User = () => {
  const isOpen = useSelector((state) => state.login.isSettingsOpen);
  const users = useSelector((state) => state.user.list);
  const currentUser = useSelector((state) => state.login.username);
  const user = users.find((username) => username.username === currentUser);

  return (
    <div className="user">
      {isOpen && (
      <div className="user-toggle">
        <div className="user-toggle-hello"><h4>Coucou {user.username} </h4></div>
        <div className="user-toggle-disconnect"><Link to="/">Se déconnecter</Link></div>
        <div className="user-toggle-delete"><Link to="/">Supprimer définitivement mon profil</Link></div>
      </div>
      )}
    </div>
  );
};

// == Export
export default User;
