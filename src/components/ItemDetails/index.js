/* eslint-disable max-len */

// == Import react hooks
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';

// == Import actions
import {
  closeItemDetails,
  saveChangeStatus,
  changeUserItemStatus,
  updateUserListStatus,
  deleteItemFromUserlist,
} from 'src/actions/userItems';

// == Import functions
import { convertDate } from 'src/functions/items';
import { statusName, cssProgressHeaderBySlug } from 'src/functions/lists';
import useOnClickOutside from '../../functions/useOnClickOutside';

// == Import style
import './itemDetails.scss';

const ItemDetails = () => {
  const currentItemShowed = useSelector((state) => state.userItems.itemCliked);
  const dispatch = useDispatch();
  const { slug } = useParams();

  // var for status's button css
  const cssStatusInactive = 'item-detail-content-left-statusButtons-button';
  const cssStatusActive = `${cssStatusInactive}-active`;

  // function to get the item's infos (dev, editor, host) depending on slug
  const itemInfosMatchingMode = (itemDetails) => {
    switch (slug) {
      case 'jeuxvideo':
        return [
          `Développeur(s) : ${itemDetails.item.developer}`,
          `Editeur : ${itemDetails.item.editor}`,
        ];

      case 'podcasts':
        return [
          `Animateur(s) : ${itemDetails.item.host}`,
        ];

      case 'films':
        return [
          `Réalisateur : ${itemDetails.item.autor}`,
          `Producteur : ${itemDetails.item.productor}`,
          `Acteurs principaux : ${itemDetails.item.host}`,
        ];

      default:
        return [];
    }
  };

  const currentStatus = useSelector((state) => state.userItems.item_status);

  // See functions/useOnClickOutside.js
  const ref = useRef();
  useOnClickOutside(ref, () => dispatch(closeItemDetails()));

  return (
    <>
      <div className="background-item-detail" />
      <div className="item-detail" ref={ref}>

        <img className="item-detail-image" src={currentItemShowed.item.background_image} alt="" />

        <div className="item-detail-content">
          <div className="item-detail-content-left">

            <h1 className="item-detail-content-left-title">{currentItemShowed.item.name}</h1>
            <p className="item-detail-content-left-date">Ajouté le {convertDate(currentItemShowed.item_added_at)}</p>

            <div
              className="item-detail-content-left-statusButtons"
              title="Cliquez pour changer le status"
              style={cssProgressHeaderBySlug(slug)}
            >
              <button
                type="button"
                className={currentStatus === 0 ? cssStatusActive : cssStatusInactive}
                onClick={() => {
                  dispatch(saveChangeStatus(0));
                }}
              >
                {statusName(0, slug)}
              </button>
              <button
                type="button"
                className={currentStatus === 1 ? cssStatusActive : cssStatusInactive}
                onClick={() => {
                  dispatch(saveChangeStatus(1));
                }}
              >
                {statusName(1, slug)}
              </button>
              <button
                type="button"
                className={currentStatus === 2 ? cssStatusActive : cssStatusInactive}
                onClick={() => {
                  dispatch(saveChangeStatus(2));
                }}
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
                  style={{ backgroundColor: tag.color }}
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
              <p className={`item-detail-content-right-about-description-${slug}`}>{currentItemShowed.item.description}</p>
              <ul className="item-detail-content-right-about-infos">
                <li className="item-detail-content-right-about-infos-info">Date de sortie : {convertDate(currentItemShowed.item.release_date)}</li>
                {itemInfosMatchingMode(currentItemShowed).map((info) => (
                  <li
                    className="item-detail-content-right-about-infos-info"
                    key={info}
                  >
                    {info}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="item-detail-buttons">
          <button
            className="item-detail-buttons-button"
            type="button"
            style={cssProgressHeaderBySlug(slug)}
            onClick={() => {
              dispatch(deleteItemFromUserlist(currentItemShowed.id));
              dispatch(closeItemDetails());
            }}
          >
            Supprimer
          </button>

          <button
            className="item-detail-buttons-button"
            type="button"
            style={cssProgressHeaderBySlug(slug)}
            onClick={() => {
              dispatch(changeUserItemStatus(currentItemShowed.id, currentStatus));
              dispatch(closeItemDetails());
              dispatch(updateUserListStatus(currentItemShowed.id, currentStatus));
            }}
          >
            Enregistrer les modifications
          </button>
        </div>

        <button
          className="item-detail-buttons-close"
          aria-label="close button"
          type="button"
          title="Fermer la fenêtre"
          onClick={() => {
            dispatch(closeItemDetails());
          }}
        />

      </div>
    </>
  );
};

// == Export
export default ItemDetails;
