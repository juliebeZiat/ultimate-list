// == Import
import { Routes, Route } from 'react-router-dom';

// == Import component
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';
import SignUp from 'src/components/SignUp';
import List from 'src/components/Lists/List';
import Error404 from 'src/components/Error404';
import Home from 'src/components/Home';
import Add from 'src/components/Lists/Add';

// == Import style
import './styles.scss';
import 'semantic-ui-css/semantic.min.css';

// == Composant
const App = () => (
  <div className="container-app">
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/jeuxvideo/liste" element={<List />} />
        <Route path="/jeuxvideo/ajouter" element={<Add />} />

        <Route path="/*" element={<Error404 />} />
      </Routes>

    </div>
    <Footer />
  </div>
);

// == Export
export default App;
