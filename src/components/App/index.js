// == Import
import { Routes, Route } from 'react-router-dom';

// == Import component
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Connexion from 'src/components/Connexion';
import Inscription from 'src/components/Inscription';

// == Import style
import './styles.scss';
import 'semantic-ui-css/semantic.min.css';

// == Composant
const App = () => (
  <div className="app">
    <h1>Ultimate List</h1>
    <Header />
    <Routes>
      <Route path="/" element={<div>Bienvenue sur la page d'accueil</div>} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      {/* Component Connexion and Inscription with their own header */}
    </Routes>
    <Footer />
  </div>
);

// == Export
export default App;
