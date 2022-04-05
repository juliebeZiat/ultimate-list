// == Import style
import './list.scss';
import './add.scss';
import {
  Grid, Icon, Label, Menu, Image,
} from 'semantic-ui-react';

// == Import Component
import { Link } from 'react-router-dom';

const List = () => (
  <div className="list">
    <div className="list-header">
      <Grid>
        <Grid.Row>
          <Grid.Column computer={1} mobile={16}>
            <div className="list-header-menu">
              <Link to="/jeuxvideo/liste">
                <div className="list-header-menu-mode active">
                  <Icon size="big" name="gamepad" />
                </div>
              </Link>
              <div className="list-header-menu-mode"><Icon size="big" name="video play" /></div>
            </div>
          </Grid.Column>

          <Grid.Column computer={14} mobile={16}>
            <div className="list-header-title">
              {/* <Icon size="large" name="gamepad" className="list-header-title-icon" /> */}
              <div className="list-header-title-mode">
                Jeux vidéo
                <span className="list-header-title-label">15</span>
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
          <Image size="tiny" src="https://i.picsum.photos/id/361/100/100.jpg?hmac=XkcZtgG_QqVwd_xSW0st9Gfwg2srT7czclvuW_lGtwA" />
        </div>
        <div className="list-items-content-details">
          <div className="list-items-content-details-title">Stardew Valley</div>
          <Label size="mini" className="list-items-content-details-status">En cours</Label>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default List;
