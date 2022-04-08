// == Import style
import Toggle from 'src/assets/icons/toggle-on.svg';
import './list.scss';

// == Import Component
import { Link } from 'react-router-dom';
import Lists from '.';

const List = () => (
  <div className="list">
    <Lists />
    <div className="list-header-toggle">
      <div className="list-header-toggle-menu active">Ma liste</div>
      <img className="list-header-toggle-icon" src={Toggle} alt="toggle-icon" />
      <div className="list-header-toggle-menu">Recommandations</div>
    </div>

    <div className="list-header-progress">
      <div className="list-header-progress-status">
        <button type="button" className="list-header-progress-status-button-active">Tous</button>
        <button type="button" className="list-header-progress-status-button">À jouer</button>
        <button type="button" className="list-header-progress-status-button">En cours</button>
        <button type="button" className="list-header-progress-status-button">Fini</button>
      </div>
    </div>

    <div className="list-add">
      <Link className="list-add-button-link" to="/jeuxvideo/ajouter">
        <button type="button" className="list-add-button">
          + Ajouter un jeu vidéo
        </button>
      </Link>
    </div>

    <div className="list-items">
      <div className="list-items-date">Mars 2022</div>
      <div className="list-items-content">
        <div className="list-items-content-image">
          <img src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" alt="miniature-jeu-video" />
        </div>
        <div className="list-items-content-details">
          <div className="list-items-content-details-title">Stardew Valley</div>
          <div className="list-items-content-details-status">En cours</div>
        </div>
      </div>

      <div className="list-items-content">
        <div className="list-items-content-image">
          <img src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" alt="miniature-jeu-video" />
        </div>
        <div className="list-items-content-details">
          <div className="list-items-content-details-title">Stardew Valley</div>
          <div className="list-items-content-details-status">En cours</div>
        </div>
      </div>

      <div className="list-items-content">
        <div className="list-items-content-image">
          <img src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" alt="miniature-jeu-video" />
        </div>
        <div className="list-items-content-details">
          <div className="list-items-content-details-title">Stardew Valley</div>
          <div className="list-items-content-details-status">En cours</div>
        </div>
      </div>
      <div className="list-items-content">
        <div className="list-items-content-image">
          <img src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" alt="miniature-jeu-video" />
        </div>
        <div className="list-items-content-details">
          <div className="list-items-content-details-title">Stardew Valley</div>
          <div className="list-items-content-details-status">En cours</div>
        </div>
      </div>
      <div className="list-items-content">
        <div className="list-items-content-image">
          <img src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" alt="miniature-jeu-video" />
        </div>
        <div className="list-items-content-details">
          <div className="list-items-content-details-title">Stardew Valley</div>
          <div className="list-items-content-details-status">En cours</div>
        </div>
      </div>
      <div className="list-items-content">
        <div className="list-items-content-image">
          <img src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" alt="miniature-jeu-video" />
        </div>
        <div className="list-items-content-details">
          <div className="list-items-content-details-title">Stardew Valley</div>
          <div className="list-items-content-details-status">En cours</div>
        </div>
      </div>
      <div className="list-items-content">
        <div className="list-items-content-image">
          <img src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" alt="miniature-jeu-video" />
        </div>
        <div className="list-items-content-details">
          <div className="list-items-content-details-title">Stardew Valley</div>
          <div className="list-items-content-details-status">En cours</div>
        </div>
      </div>
      <div className="list-items-content">
        <div className="list-items-content-image">
          <img src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" alt="miniature-jeu-video" />
        </div>
        <div className="list-items-content-details">
          <div className="list-items-content-details-title">Stardew Valley</div>
          <div className="list-items-content-details-status">En cours</div>
        </div>
      </div>

    </div>
  </div>
);

// == Export
export default List;
