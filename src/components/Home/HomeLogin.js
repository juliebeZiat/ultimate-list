// == Import react
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// == Import style
import './home.scss';
import Videogame from 'src/assets/icons/videogame.svg';
import Podcast from 'src/assets/icons/podcast.svg';
import Movie from 'src/assets/icons/movie.svg';

// == Import actions
import { loaderOn } from '../../actions/loader';
import { getUserItemsFromApi } from '../../actions/userItems';
import { getModeFromApi } from '../../actions/modes';

const HomeLogin = () => {
  // var to dynamize the mod's background color according to the color of mode list store in state
  const modeList = useSelector((state) => state.modes.list);
  const modeColor = modeList.map((item) => item.color);

  const dispatch = useDispatch();

  return (
    <div className="home-login">
      <h3 className="home-login-title">Choisissez le type de <span>liste</span> que vous souhaitez créer ou modifier</h3>
      <div className="home-login-mode">

        <Link to="/jeuxvideo/liste">
          <div
            className="home-login-mode-videogame"
            style={{ backgroundColor: modeColor[1] }}
            onClick={() => {
              dispatch(getUserItemsFromApi());
              dispatch(getModeFromApi());
              dispatch(loaderOn());
            }}
          >
            <img className="home-login-mode-videogame-icon" src={Videogame} alt="icone jeux video" />
            <p className="mode-title">Jeux vidéo</p>
          </div>
        </Link>

        <Link to="/podcasts/liste">
          <div
            className="home-login-mode-podcast"
            style={{ backgroundColor: modeColor[0] }}
            onClick={() => {
              dispatch(getUserItemsFromApi());
              dispatch(getModeFromApi());
              dispatch(loaderOn());
            }}
          >
            <img className="home-login-mode-podcast-icon" src={Podcast} alt="icone podcast" />
            <p className="mode-title">Podcasts</p>
          </div>
        </Link>

        <Link to="/films/liste">
          <div
            className="home-login-mode-films"
            style={{ backgroundColor: modeColor[2] }}
            onClick={() => {
              dispatch(getUserItemsFromApi());
              dispatch(getModeFromApi());
              dispatch(loaderOn());
            }}
          >
            <img className="home-login-mode-films-icon" src={Movie} alt="icone podcast" />
            <p className="mode-title">Films</p>
          </div>
        </Link>

      </div>
    </div>
  );
};

// == Export
export default HomeLogin;
