// == Import style
import './list.scss';
import './add.scss';
import { Icon } from 'semantic-ui-react';

// == Import Component
import { Link } from 'react-router-dom';

const Lists = () => (
  <div className="list-header">
    <div className="list-header-menu">
      <Link to="/jeuxvideo/liste">
        <div className="list-header-menu-mode active">
          <Icon size="big" name="gamepad" />
        </div>
      </Link>
      <div className="list-header-menu-mode"><Icon size="big" name="video play" /></div>
    </div>

    <div className="list-header-title">
      <div className="list-header-title-mode">
        Jeux vidéo
        {window.location.href === 'http://localhost:8080/jeuxvideo/liste' && <span className="list-header-title-label">15</span>}
      </div>
    </div>
  </div>
);

// == Export
export default Lists;
