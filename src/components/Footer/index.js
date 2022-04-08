// == Import style
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer">
    <div className="footer-columns">
      {/* Column1 */}
      <div className="footer-column1">
        <Link to="/a-propos">
          <h6 className="title1">Qui sommes-nous ?</h6>
        </Link>
      </div>
      {/* Column2 */}
      <div className="footer-column2">
        <Link to="/contact">
          <h6 className="title2">Contactez-nous</h6>
        </Link>
      </div>
      {/* Column3 */}
      <div className="footer-columns-column3">
        <Link to="/">
          <h3 className="title3">Ultimate List</h3>
        </Link>
        <p className="copyright">&copy; 2022 | Ultimate List</p>
      </div>
      {/* Column4 */}
      <div className="footer-column4">
        <Link to="/">
          <h6 className="title4">Conditions générales d'utilisation</h6>
        </Link>
      </div>
      {/* Column5 */}
      <div className="footer-column5">
        <Link to="/">
          <h6 className="title5">Mentions Légales</h6>
        </Link>
      </div>
    </div>
  </div>

);

export default Footer;
