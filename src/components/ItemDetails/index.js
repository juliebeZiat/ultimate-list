/* eslint-disable max-len */

// == Import react hooks
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// == Import functions
import { convertDate } from 'src/functions/items';
import { statusName } from 'src/functions/lists';

// == Import actions
import { closeItemDetails } from 'src/actions/userItems';

// == Import style
import './itemDetails.scss';

const ItemDetails = () => {
  const currentItemShowed = useSelector((state) => state.userItems.itemCliked);
  const dispatch = useDispatch();
  const { slug } = useParams();
console.log(currentItemShowed);
  // var for status's button css
  const cssStatusInactive = 'item-detail-content-left-statusButtons-button';
  const cssStatusActive = `${cssStatusInactive}-active`;

  return (
    <>
      <div className="background-item-detail" />
      <div className="item-detail">

        <img className="item-detail-image" src={currentItemShowed.item.image} alt="" />

        <div className="item-detail-content">
          <div className="item-detail-content-left">

            <h1 className="item-detail-content-left-title">{currentItemShowed.item.name}</h1>
            <p className="item-detail-content-left-date">Ajouté le {convertDate(currentItemShowed.item_added_at)}</p>

            <div className="item-detail-content-left-statusButtons">
              <button
                type="button"
                className={currentItemShowed.item_status === 0 ? cssStatusActive : cssStatusInactive}
              >
                {statusName(0, slug)}
              </button>
              <button
                type="button"
                className={currentItemShowed.item_status === 1 ? cssStatusActive : cssStatusInactive}
              >
                {statusName(1, slug)}
              </button>
              <button
                type="button"
                className={currentItemShowed.item_status === 2 ? cssStatusActive : cssStatusInactive}
              >
                {statusName(2, slug)}
              </button>
            </div>

            <h2 className="item-detail-subtitles">Notes personnelles :</h2>
            <textarea
              className="item-detail-content-left-comment"
              name="Text1"
              cols="30"
              rows="8"
              defaultValue={currentItemShowed.item_comment}
            />
          </div>

          <div className="item-detail-content-right">
            <h2 className="item-detail-subtitles">Genre(s)</h2>
            <div className="item-detail-content-right-tags">
              {currentItemShowed.item.tags.map((tag) => (
                <span
                  className="item-detail-content-right-tags-tag"
                  key={tag.id}
                >
                  {tag.name}
                </span>
              ))}
            </div>

            <h2 className="item-detail-subtitles">Plateforme(s)</h2>
            <div className="item-detail-content-right-tags">
              {currentItemShowed.item.platforms.map((platform) => (
                <span
                  className="item-detail-content-right-tags-tag"
                  key={platform.id}
                >
                  {platform.name}
                </span>
              ))}
            </div>

            <div className="item-detail-content-right-about">
              <h2 className="item-detail-subtitles">À propos...</h2>
              <p className="item-detail-content-right-about-description">{currentItemShowed.item.description}</p>
              <ul className="item-detail-content-right-about-infos">
                <li className="item-detail-content-right-about-infos-info">Date de sortie : {convertDate(currentItemShowed.item.release_date)}</li>
                <li className="item-detail-content-right-about-infos-info">Développeur : Loulou</li>
                <li className="item-detail-content-right-about-infos-info">Editeur : Pareil</li>
                <li className="item-detail-content-right-about-infos-info">Réalisateur : Pas moi</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="item-detail-buttons">
          <button
            className="item-detail-buttons-button"
            type="button"
          >
            Supprimer
          </button>

          <button
            className="item-detail-buttons-button"
            type="button"
          >
            Enregistrer les modifications
          </button>

          <button
            className="item-detail-buttons-button"
            type="button"
            onClick={() => {
              dispatch(closeItemDetails());
            }}
          >
            Fermer
          </button>
        </div>
      </div>
    </>
  );
};

// == Export
export default ItemDetails;
