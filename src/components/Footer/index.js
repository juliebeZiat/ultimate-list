// == Import style
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer-columns">
      {/* Column1 */}
      <div className="footer-column1">
        <h6 className="title1">Qui sommes-nous ?</h6>
      </div>
      {/* Column2 */}
      <div className="footer-column2">
        <h6 className="title2">Contactez-nous</h6>
      </div>
      {/* Column3 */}
      <div className="footer-column3">
        <h3 className="title3">Ultimate List</h3>
      </div>
      {/* Column4 */}
      <div className="footer-column4">
        <h6 className="title4">Conditions générales d'utilisation</h6>
      </div>
      {/* Column5 */}
      <div className="footer-column5">
        <h6 className="title5">Mentions Légales</h6>
      </div>
    </div>
    <p className="copyright">&copy; 2022 | Ultimate List</p>
  </div>

);

export default Footer;
