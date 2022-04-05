// == Import Component
import {
  Search,
  Icon,
  Grid,
} from 'semantic-ui-react';
import Lists from '.';

const Add = () => (
  <>
    <Lists />
    <div className="add">
      <div className="add-search">
        <h2 className="add-modSubtitle">Ajouter un jeu vidéo</h2>
        <Search
          className="add-search-bar"
          placeholder="Assassin's Creed, Elden Ring, God of War..."
          input={{
            fluid: true,
            iconPosition: 'left',
          }}
        />
      </div>

      <div className="add-reco">
        <h2 className="add-modSubtitle">Nos recommandations pour toi</h2>

        <ul className="add-reco-cards">
          <li className="add-reco-cards-card">
            <img className="add-reco-cards-card-img" src="https://picsum.photos/500/500" alt="" />
            <div className="add-reco-cards-card-content">
              <h3>Card</h3>
              <p>Description</p>
            </div>
            <button className="add-reco-cards-card-button" type="button" aria-label="icon plus"><Icon name="plus" /></button>
          </li>

          <li className="add-reco-cards-card">
            <img className="add-reco-cards-card-img" src="https://picsum.photos/500/500" alt="" />
            <div className="add-reco-cards-card-content">
              <h3>Card</h3>
              <p>Description</p>
            </div>
            <button className="add-reco-cards-card-button" type="button" aria-label="icon plus"><Icon name="plus" /></button>
          </li>

          <li className="add-reco-cards-card">
            <img className="add-reco-cards-card-img" src="https://picsum.photos/500/500" alt="" />
            <div className="add-reco-cards-card-content">
              <h3>Card</h3>
              <p>Description</p>
            </div>
            <button className="add-reco-cards-card-button" type="button" aria-label="icon plus"><Icon name="plus" /></button>
          </li>

          <li className="add-reco-cards-card">
            <img className="add-reco-cards-card-img" src="https://picsum.photos/500/500" alt="" />
            <div className="add-reco-cards-card-content">
              <h3>Card</h3>
              <p>Description</p>
            </div>
            <button className="add-reco-cards-card-button" type="button" aria-label="icon plus"><Icon name="plus" /></button>
          </li>
        </ul>

      </div>
    </div>
  </>
);

// == Export
export default Add;
