// == Import style
import './footer.scss';

const Footer = () => (
  <div className="main-footer">
    <div className="container">
      <div className="row">
        {/* Column1 */}
        <div className="col">
          <h4>Qui sommes-nous ?</h4>
        </div>
        {/* Column2 */}
        <div className="col">
          <h4>Contactez-nous</h4>
        </div>
        {/* Column3 */}
        <div className="col">
          <h3>Ultimate List</h3>
          <ul className="list-unstyled">
            <li>&copy; 2022 | Ultimate List</li>
          </ul>
        </div>
        {/* Column4 */}
        <div className="col">
          <h4>Conditions générales d'utilisation</h4>
        </div>
        {/* Column5 */}
        <div className="col">
          <h4>Mentions Légales</h4>
        </div>
      </div>
    </div>
  </div>

);

export default Footer;
