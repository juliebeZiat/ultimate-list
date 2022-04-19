// == Import style
import { Link } from 'react-router-dom';
import ErrorGif from 'src/assets/404_domi.gif';

const Error401 = () => (
  <div className="notfound">
    <div className="notfound-page">
      <h1 className="notfound-page-message">Oh bah ! Qu'est-ce que tu fais là ?</h1>
      <p className="notfound-page-subtitle">Inscris-toi ou connecte-toi pour accéder au site</p>
      <div className="notfound-buttons">
        <Link to="/connexion"><button type="button">Connexion</button></Link>
        <Link to="/inscription"><button type="button">Inscription</button></Link>
      </div>
      <img className="notfound-gif" src={ErrorGif} alt="" />
    </div>
  </div>
);

// == Export
export default Error401;
