// == Import style
import './liste.scss';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const List = () => (
  <div>
    <Button>
      <Link to="/jeuxvideo/ajouter">
        Ajouter un item
      </Link>
    </Button>
    <div>La Liste youpi</div>
  </div>
);

// == Export
export default List;
