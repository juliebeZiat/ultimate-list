// == Import style
import './home.scss';
import HomeLogin from './HomeLogin';
import HomeLogout from './HomeLogout';

const Home = () => (
  <div className="home">
    <div className="home-title">Découvrez. Partagez. Créez</div>
    <div className="home-tagline">Créez d’incroyables wish-list pour sauvegarder et organiser tous vos souvenirs et recommandations de vos amis</div>
    <HomeLogin />
    <HomeLogout />
  </div>

);

// == Export
export default Home;
