// == Import style
import { Link } from 'react-router-dom';

const Error401 = () => (
  <div className="notfound">
    <div className="notfound-page">
      <h1 className="notfound-page-message">Veuillez vous connecter</h1>
      <p className="notfound-page-home"><Link to="/connexion">Se connecter</Link></p>
    </div>
  </div>
);

// == Export
export default Error401;
