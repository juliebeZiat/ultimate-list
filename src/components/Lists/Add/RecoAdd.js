// == Import
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// == Import functions
import { findItemsByMode } from 'src/functions/items';

const RecoAdd = () => {
  // var used to display the recommendation
  const items = useSelector((state) => state.items.list);
  const { slug } = useParams();
  const itemsFiltered = findItemsByMode(items, slug);

  return (
    <div className="add-reco">
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
  );
};

export default RecoAdd;
