// == Import style
import './itemDetails.scss';

const ItemDetails = () => (
  <>
    <div className="background-item-detail" />
    <div className="item-detail">

      <img className="item-detail-image" src="https://picsum.photos/720/200" alt="" />
      <div className="item-detail-content">

        <h1 className="item-detail-content-title">Titre de l'item</h1>
        <p className="item-detail-content-date">Ajouté le 00 janvier 2022</p>

        <div className="item-detail-content-statusButtons">
          <button
            type="button"
            className="item-detail-content-statusButtons-button"
          >
            A faire
          </button>
          <button
            type="button"
            className="item-detail-content-statusButtons-button"
          >
            En cours
          </button>
          <button
            type="button"
            className="item-detail-content-statusButtons-button"
          >
            Terminé
          </button>
        </div>

        <div className="item-detail-content-tags">
          <span className="item-detail-content-tags-tag">Genre</span>
        </div>

      </div>
    </div>
  </>
);

// == Export
export default ItemDetails;
