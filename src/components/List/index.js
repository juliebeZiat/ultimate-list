// == Import style
import './liste.scss';
import {
  Button, Icon, Item, Label, Menu, Radio,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const List = () => (
  <div className="list">
    <div className="list-menu">
      <Menu compact icon>
        <Menu.Item>
          <Icon name="gamepad" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="video play" />
        </Menu.Item>
      </Menu>
    </div>

    <div className="list-header">
      {/* <Icon name="gamepad" className="list-header-icon" /> */}
      <div className="list-header-title">Jeux vidéo</div>
      <Label circular className="list-header-label">15</Label>
    </div>

    <div className="list-toggle">
      <div className="list-toggle-list">Ma liste</div>
      <Radio toggle className="list-toggle-icon" />
      <div className="list-toggle-reco">Recommandations</div>
    </div>

    <div className="list-progress">
      <Button>
        <Link to="/jeuxvideo/ajouter">
          Ajouter un item
        </Link>
      </Button>
      <Button>Tous</Button>
      <Button>À jouer</Button>
      <Button>En cours</Button>
      <Button>Fini</Button>
    </div>
    <div className="list-items">
      <div className="list-items-date">Mars 2022</div>
      <Item.Group>
        <Item className="list-items-item">
          <Item.Image />
          <Item.Content>
            <Item.Header className="list-items-item-image">Stardew Valley</Item.Header>
            <Item.Extra>
              <Label className="list-items-item-status">En cours</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  </div>
);

// == Export
export default List;
