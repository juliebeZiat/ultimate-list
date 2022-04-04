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
      <div className="list-header-title">
        Jeux vidéo
        <Label size="mini" circular className="list-header-label">15</Label>
      </div>
    </div>

    <div className="list-toggle">
      <div className="list-toggle-list">Ma liste</div>
      <Radio toggle className="list-toggle-icon" />
      <div className="list-toggle-reco">Recommandations</div>
    </div>

    <div className="list-add">
      <Button circular>
        <Link to="/jeuxvideo/ajouter">
          + Ajouter un item
        </Link>
      </Button>
    </div>

    <div className="list-progress">
      <Button circular>Tous</Button>
      <Button circular>À jouer</Button>
      <Button circular>En cours</Button>
      <Button circular>Fini</Button>
    </div>

    <div className="list-items">
      <div className="list-items-date">Mars 2022</div>
      <Item.Group>
        <Item className="list-items-item">
          <Item.Image />
          <Item.Content>
            <Item.Header className="list-items-item-image">Stardew Valley</Item.Header>
            <Item.Extra>
              <Label size="mini" className="list-items-item-status">En cours</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <Item.Group>
        <Item className="list-items-item">
          <Item.Image />
          <Item.Content>
            <Item.Header className="list-items-item-image">Stardew Valley</Item.Header>
            <Item.Extra>
              <Label size="mini" className="list-items-item-status">En cours</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  </div>
);

// == Export
export default List;
