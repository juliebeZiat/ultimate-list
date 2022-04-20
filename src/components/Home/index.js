// == Import react hooks
import { useSelector } from 'react-redux';

// == Import style
import './home.scss';

// == Import components
import HomeLogin from './HomeLogin';
import HomeLogout from './HomeLogout';

const Home = () => {
  const logged = useSelector((state) => state.login.logged);

  return (
    <div className="home">
      <h1 className="home-title">Ultimate List</h1>

      <h2 className="home-subtitle">
        <span className="home-subtitle-first">Découvrez. </span>
        <span className="home-subtitle-second">Partagez. </span>
        <span className="home-subtitle-third">Créez. </span>
      </h2>

      <p className="home-tagline">Créez d’incroyables todo-list pour sauvegarder et organiser tous vos souvenirs et recommandations de vos amis</p>
      {/* If user is not logged, show <HomeLogout />, otherwise show <HomeLogin /> */}
      {!logged && <HomeLogout />}
      {logged && <HomeLogin />}
    </div>
  );
};

// == Export
export default Home;
