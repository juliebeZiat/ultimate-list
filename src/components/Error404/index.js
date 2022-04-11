// == Import style
import './error404.scss';
import { Link } from 'react-router-dom';

const Error404 = () => (
  <div className="notfound">
    <div className="notfound-page">
      <h1 className="notfound-page-message">WOUPS la page demandée n'existe pas bichon !</h1>
      <p className="notfound-page-home"><Link to="/">revenir à la page d'accueil</Link></p>
    </div>

    <div className="notfound-gif"><iframe src="https://giphy.com/embed/vnFB72LzHtO4o" width="480" height="316" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
  </div>
);

// == Export
export default Error404;
