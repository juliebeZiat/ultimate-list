// == Import Component
import Lists from '.';

const Add = () => (
  <>
    <Lists />
    <div className="add">
      <div className="add-search">
        <h2 className="add-modSubtitle">Ajouter un jeu vidéo</h2>
        <input
          className="input-search"
          // eslint-disable-next-line react/jsx-max-props-per-line
          placeholder="Assassin's Creed, Elden Ring, God of War..." type="search"
          id="item-search"
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
              <span className="card-tag">TAG</span>
            </div>
            <button className="add-reco-cards-card-button" type="button" aria-label="icon plus" />
          </li>

          <li className="add-reco-cards-card">
            <img className="add-reco-cards-card-img" src="https://picsum.photos/500/500" alt="" />
            <div className="add-reco-cards-card-content">
              <h3>Card</h3>
              <p>Description</p>
              <span className="card-tag">TAG</span>
            </div>
            <button className="add-reco-cards-card-button" type="button" aria-label="icon plus" />
          </li>

          <li className="add-reco-cards-card">
            <img className="add-reco-cards-card-img" src="https://picsum.photos/500/500" alt="" />
            <div className="add-reco-cards-card-content">
              <h3>Card</h3>
              <p>Description</p>
              <span className="card-tag">TAG</span>
            </div>
            <button className="add-reco-cards-card-button" type="button" aria-label="icon plus" />
          </li>

          <li className="add-reco-cards-card">
            <img className="add-reco-cards-card-img" src="https://picsum.photos/500/500" alt="" />
            <div className="add-reco-cards-card-content">
              <h3>Card</h3>
              <p>Description</p>
              <span className="card-tag">TAG</span>
            </div>
            <button className="add-reco-cards-card-button" type="button" aria-label="icon plus" />
          </li>
        </ul>

      </div>
    </div>
  </>
);

// == Export
export default Add;
