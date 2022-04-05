// == Import style
import './list.scss';
import './add.scss';
import {
  Button, Grid, Icon, Label, Menu, Image, Header,
} from 'semantic-ui-react';

// == Import Component
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
            <Menu inverted size="massive" secondary compact vertical icon>
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
              <Menu text inverted>
                <Menu.Item
                  name="Ma liste"
                  active
                />
                <Menu.Item>
                  <Icon name="toggle off" className="list-header-toggle-icon" />
                </Menu.Item>
                <Menu.Item
                  name="Recommandations"
                />
              </Menu>
            </div>

            <div className="list-header-progress">
              <div className="list-header-progress-status">
                <button type="button" className="list-header-progress-status-button-active">Tous</button>
                <button type="button" className="list-header-progress-status-button">À jouer</button>
                <button type="button" className="list-header-progress-status-button">En cours</button>
                <button type="button" className="list-header-progress-status-button">Fini</button>
              </div>
            </div>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>

    <div className="list-add">
      <Button circular className="list-add-button">
        <Link className="list-add-button-link" to="/jeuxvideo/ajouter">
          + Ajouter un item
        </Link>
      </Button>
    </div>

    <div className="list-items">
      <div className="list-items-date">Mars 2022</div>
      <Grid columns={2} className="list-items-item-content">
        <Grid.Row>
          <Grid.Column computer={3}>
            <Image size="tiny" src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" />
          </Grid.Column>
          <Grid.Column className="list-items-item-content" computer={13}>
            <Header as="h4" className="list-items-item-content-title">Zelda</Header>
            <Label size="mini" className="list-items-item-status">En cours</Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={2} className="list-items-item-content">
        <Grid.Row>
          <Grid.Column computer={3}>
            <Image size="tiny" src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" />
          </Grid.Column>
          <Grid.Column className="list-items-item-content" computer={13}>
            <Header as="h4" className="list-items-item-content-title">Zelda</Header>
            <Label size="mini" className="list-items-item-status">En cours</Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={2} className="list-items-item-content">
        <Grid.Row>
          <Grid.Column computer={3}>
            <Image size="tiny" src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" />
          </Grid.Column>
          <Grid.Column className="list-items-item-content" computer={13}>
            <Header as="h4" className="list-items-item-content-title">Zelda</Header>
            <Label size="mini" className="list-items-item-status">En cours</Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={2} className="list-items-item-content">
        <Grid.Row>
          <Grid.Column computer={3}>
            <Image size="tiny" src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" />
          </Grid.Column>
          <Grid.Column className="list-items-item-content" computer={13}>
            <Header as="h4" className="list-items-item-content-title">Zelda</Header>
            <Label size="mini" className="list-items-item-status">En cours</Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={2} className="list-items-item-content">
        <Grid.Row>
          <Grid.Column computer={3}>
            <Image size="tiny" src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" />
          </Grid.Column>
          <Grid.Column className="list-items-item-content" computer={13}>
            <Header as="h4" className="list-items-item-content-title">Zelda</Header>
            <Label size="mini" className="list-items-item-status">En cours</Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={2} className="list-items-item-content">
        <Grid.Row>
          <Grid.Column computer={3}>
            <Image size="tiny" src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" />
          </Grid.Column>
          <Grid.Column className="list-items-item-content" computer={13}>
            <Header as="h4" className="list-items-item-content-title">Zelda</Header>
            <Label size="mini" className="list-items-item-status">En cours</Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

// == Export
export default List;
