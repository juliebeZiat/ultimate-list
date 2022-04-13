// == Import
import PropTypes from 'prop-types';

const RecoAdd = ({ recommendations }) => (
  <div className="add-reco">
    <h2 className="add-modSubtitle">Nos recommandations pour toi</h2>
    <ul className="add-reco-cards">
      {recommendations.slice(0, 4).map((item) => (
        <li className="add-reco-cards-card" key={item.id}>
          <img className="card-image" src={item.image} alt="" />
          <div className="card-content">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-description">{item.developer}{item.host}</p>
            <div className="card-tags">
              {item.tags.map((tag) => (
                <span
                  className="card-tag"
                  key={tag.id}
                  // style={{ backgroundColor: tag.color }}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
          <button
            className="card-button"
            type="button"
            aria-label="icon plus"
            onClick={() => console.log('coucou le bouton', item.id)}
          />
        </li>
      ))}
    </ul>
  </div>
);

RecoAdd.propTypes = {
  recommendations: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};

export default RecoAdd;
