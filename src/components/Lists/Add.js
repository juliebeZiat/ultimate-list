// == Import
import { useSelector } from 'react-redux';

// == Import Component
import Lists from '.';

const Add = () => {
  const items = useSelector((state) => state.items.list);

  return (
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
            {items.map((item) => (
              <li className="add-reco-cards-card" key={item.id}>
                <img className="card-image" src={item.image} alt="" />
                <div className="card-content">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-description">{item.description}</p>
                  {item.tags.map((tag) => (
                    <span className="card-tag" key={tag.id}>{tag.id}</span>
                  ))}
                </div>
                <button className="card-button" type="button" aria-label="icon plus" />
              </li>
            ))}
          </ul>

        </div>
      </div>
    </>
  );
};

// == Export
export default Add;
