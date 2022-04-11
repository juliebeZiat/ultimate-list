// == Import
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

// == Import functions
import { findItemsByMode } from 'src/functions/items';

// == Import Components
import Lists from '../index';

const Add = () => {
  // var used to display the recommendation
  const items = useSelector((state) => state.items.list);
  const { slug } = useParams();
  const itemsFiltered = findItemsByMode(items, slug);

  // var used for input search
  const [inputValue, setInputValue] = useState('');
  let recoCssClass = 'add-reco';

  return (
    <>
      <Lists />
      <div className="add">
        <div className="add-search">
          <h2 className="add-modSubtitle">Ajouter un jeu vidéo</h2>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log('je fais une recherche');
              recoCssClass = 'add-reco--hidden';
              setInputValue('');
            }}
          >
            <input
              className="input-search"
              // eslint-disable-next-line react/jsx-max-props-per-line
              placeholder="Assassin's Creed, Elden Ring, God of War..."
              type="search"
              id="item-search"
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
            />
          </form>
        </div>

        <div className={recoCssClass}>
          <h2 className="add-modSubtitle">Nos recommandations pour toi</h2>
          <ul className="add-reco-cards">
            {itemsFiltered.slice(0, 4).map((item) => (
              <li className="add-reco-cards-card" key={item.id}>
                <img className="card-image" src={item.image} alt="" />
                <div className="card-content">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-description">{item.developer}</p>
                  <div className="card-tags">
                    {item.tags.map((tag) => (
                      <span className="card-tag" key={tag.id}>{tag.name}</span>
                    ))}
                  </div>
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
