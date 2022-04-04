// == Import style
import './liste.scss';
import {
  Button, Grid, Icon, Item, Label, Menu,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const List = () => (
  <div className="list">
    <div className="list-header">
      <Grid>

        {/* Menu mobile */}
        <Grid.Row centered only="mobile">
          <Menu secondary compact icon size="massive">
            <Menu.Item active>
              <Icon name="gamepad" />
            </Menu.Item>
            <Menu.Item>
              <Icon name="video play" />
            </Menu.Item>
          </Menu>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column computer={2} only="computer tablet">
            <Menu size="massive" secondary compact vertical icon>
              <Menu.Item active>
                <Icon name="gamepad" />
              </Menu.Item>
              <Menu.Item>
                <Icon name="video play" />
              </Menu.Item>
            </Menu>
          </Grid.Column>

          <Grid.Column computer={14} mobile={16}>
            <div className="list-header-title">
              {/* <Icon size="large" name="gamepad" className="list-header-title-icon" /> */}
              <div className="list-header-title-mode">
                Jeux vidéo
                <Label size="mini" circular className="list-header-title-label">15</Label>
              </div>
            </div>

            <div className="list-header-toggle">
              <Menu text>
                <Menu.Item
                  name="Ma liste"
                  active
                />
                <Menu.Item>
                  <Icon name="toggle off" className="list-toggle-icon" />
                </Menu.Item>
                <Menu.Item
                  name="Recommandations"
                />
              </Menu>
            </div>

            <div className="list-header-progress">
              <div className="list-header-progress-status">
                <Button circular>Tous</Button>
                <Button circular>À jouer</Button>
                <Button circular>En cours</Button>
                <Button circular>Fini</Button>
              </div>
            </div>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>

    <div className="list-items">
      <div className="list-add">
        <Button circular>
          <Link to="/jeuxvideo/ajouter">
            + Ajouter un item
          </Link>
        </Button>
      </div>
      <div className="list-items-date">Mars 2022</div>
      <Item.Group unstackable>
        <Item className="list-items-item">
          <Item.Image size="tiny" src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" />
          <Item.Content className="list-items-item-content">
            <Item.Header>Stardew Valley</Item.Header>
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
