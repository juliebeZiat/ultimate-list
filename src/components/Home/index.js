// == Import style
import './home.scss';
import HomeLogin from './HomeLogin';
import HomeLogout from './HomeLogout';

const Home = () => (
  <div className="home">
    <h1 className="home-title">Ultimate List</h1>
    <h2 className="home-subtitle">Découvrez. Partagez. Créez.</h2>
    <p className="home-tagline">Créez d’incroyables todo-list pour sauvegarder et organiser tous vos souvenirs et recommandations de vos amis</p>
    <HomeLogout />
    <HomeLogin />
  </div>

);

// == Export
export default Home;
