// == Import
import { Routes, Route } from 'react-router-dom';

// == Import component
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';
import SignUp from 'src/components/SignUp';
import List from 'src/components/List';
import Error404 from 'src/components/Error404';
import Add from 'src/components/List/Add';

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
      <Route path="/connexion" element={<Login />} />
      <Route path="/inscription" element={<SignUp />} />
      <Route path="/jeuxvideo/liste" element={<List />} />
      <Route path="/jeuxvideo/ajouter" element={<Add />} />

      <Route path="/*" element={<Error404 />} />
    </Routes>

    <Footer />
  </div>
);

// == Export
export default App;
