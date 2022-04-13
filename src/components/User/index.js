// == Import style
import './user.scss';
import { Link } from 'react-router-dom';

// == Import react hooks
import { useSelector, useDispatch } from 'react-redux';

// == Import actions
import { logOut } from 'src/actions/login';

// eslint-disable-next-line arrow-body-style
const User = () => {
  const isOpen = useSelector((state) => state.login.isSettingsOpen);
  const users = useSelector((state) => state.user.list);
  const currentUser = useSelector((state) => state.login.username);
  const user = users.find((username) => username.username === currentUser);

  // to settup te deconnexion we need to dispatch the action logOut
  const dispatch = useDispatch();

  return (
    <div className="user">
      {isOpen && (
      <div className="user-toggle">
        <div className="user-toggle-hello"><h4>Coucou {user.username} </h4></div>
        <div className="user-toggle-disconnect">
          <Link
            to="/"
            onClick={() => {
              // when the user logout, his token is removed from local storage
              localStorage.removeItem('user_token');
              // and the value of state "logged" change for false
              dispatch(logOut);
            }}
          >
            Se déconnecter
          </Link>
        </div>
        <div className="user-toggle-delete"><Link to="/">Supprimer définitivement mon profil</Link></div>
      </div>
      )}
    </div>
  );
};

// == Export
export default User;
