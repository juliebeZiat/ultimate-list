// == Import style
import './error404.scss';
import { Link } from 'react-router-dom';
import ErrorGif from 'src/assets/404_domi.gif';
import Heart from 'src/assets/icons/heart.svg';

const Error404 = () => (
  <div className="notfound">
    <div className="notfound-page">
      <h1 className="notfound-page-message">Tu t'es perdu.e ?</h1>
      <p className="notfound-page-home"><img src={Heart} alt="" /><Link to="/"> Reviens donc à la page d'accueil <img src={Heart} alt="" /></Link></p>
      <img className="notfound-gif" src={ErrorGif} alt="" />
    </div>
  </div>
);

// == Export
export default Error404;
