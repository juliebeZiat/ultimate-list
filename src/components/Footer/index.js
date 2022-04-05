// == Import style
import './footer.scss';

const Footer = () => (
  <div className="ui container">
    <div className="ui grid">
      {/* Column1 */}
      <div className="sixteen wide mobile eight wide tablet three wide computer column">
        <h6 className="ui small header">Qui sommes-nous ?</h6>
      </div>
      {/* Column2 */}
      <div className="sixteen wide mobile eight wide tablet three wide computer column">
        <h6 className="ui small header">Contactez-nous</h6>
      </div>
      {/* Column3 */}
      <div className="sixteen wide mobile eight wide tablet three wide computer column">
        <h3>Ultimate List</h3>
      </div>
      {/* Column4 */}
      <div className="sixteen wide mobile eight wide tablet three wide computer column">
        <h6 className="ui small header">Conditions générales d'utilisation</h6>
      </div>
      {/* Column5 */}
      <div className="sixteen wide mobile eight wide tablet three wide computer column">
        <h6 className="ui small header">Mentions Légales</h6>
      </div>
    </div>
    <p className="ui center aligned tiny grey header">&copy; 2022 | Ultimate List</p>
  </div>

);

export default Footer;
