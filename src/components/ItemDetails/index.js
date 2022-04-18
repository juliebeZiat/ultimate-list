/* eslint-disable max-len */

// == Import react hooks
import { useSelector } from 'react-redux';

// == Import style
import './itemDetails.scss';

const ItemDetails = () => {
  const currentItemShowed = useSelector((state) => state.userItems.itemCliked);
  console.log(currentItemShowed);

  return (
    <>
      <div className="background-item-detail" />
      <div className="item-detail">

        <img className="item-detail-image" src="https://picsum.photos/720/200" alt="" />

        <div className="item-detail-content">
          <div className="item-detail-content-left">

            <h1 className="item-detail-content-left-title">Pokemon Donjon Mystère</h1>
            <p className="item-detail-content-left-date">Ajouté le 00 janvier 2022</p>

            <div className="item-detail-content-left-statusButtons">
              <button
                type="button"
                className="item-detail-content-left-statusButtons-button-active"
              >
                À faire
              </button>
              <button
                type="button"
                className="item-detail-content-left-statusButtons-button"
              >
                En cours
              </button>
              <button
                type="button"
                className="item-detail-content-left-statusButtons-button"
              >
                Terminé
              </button>
            </div>

            <h2 className="item-detail-subtitles">Notes personnelles :</h2>
            <textarea
              className="item-detail-content-left-comment"
              name="Text1"
              cols="30"
              rows="8"
            />
          </div>

          <div className="item-detail-content-right">
            <h2 className="item-detail-subtitles">Genre(s)</h2>
            <div className="item-detail-content-right-tags">
              <span className="item-detail-content-right-tags-tag">FPS</span>
              <span className="item-detail-content-right-tags-tag">Horreur</span>
            </div>

            <h2 className="item-detail-subtitles">Plateforme(s)</h2>
            <div className="item-detail-content-right-tags">
              <span className="item-detail-content-right-tags-tag">PC</span>
            </div>

            <div className="item-detail-content-right-about">
              <h2 className="item-detail-subtitles">À propos...</h2>
              <p className="item-detail-content-right-about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac hendrerit mauris. Integer ac dignissim purus. Integer aliquet mollis est a lacinia. Integer porttitor orci ac lacus varius, id porttitor sapien ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula nisi non sem sagittis, volutpat dictum nulla varius. Ut tempus a mi eget dapibus. Nulla sed arcu accumsan, efficitur mauris quis, ultricies urna.</p>
              <ul className="item-detail-content-right-about-infos">
                <li className="item-detail-content-right-about-infos-info">Date de sortie : 00 janvier 1960</li>
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
        </div>
      </div>
    </>
  );
};

// == Export
export default ItemDetails;
