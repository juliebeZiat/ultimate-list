// == Import dependencies
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == Import component
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';
import SignUp from 'src/components/SignUp';
import StatusFilter from 'src/components/Lists/StatusFilter';
import ItemDetails from 'src/components/ItemDetails';
import Error404 from 'src/components/Errors/Error404';
import Error401 from 'src/components/Errors/Error401';
import Home from 'src/components/Home';
import Add from 'src/components/Lists/Add/Add';
import User from 'src/components/User';
import Contact from '../Annex/Contact';
import Team from '../Annex/Team';
import Reco from '../Lists/Reco';
import Cgu from '../Annex/cgu';
import Legal from '../Annex/legal';

// == Import actions
import { getItemsFromApi } from '../../actions/items';
import { getUserItemsFromApi, getReco } from '../../actions/userItems';
import { getModeFromApi } from '../../actions/modes';
import { getUserFromApi } from '../../actions/user';
import { verifyUsertokenInLocalstorage, decodeTokenToSaveUsername } from '../../actions/login';

// == Import style
import './styles.scss';
import Loader from '../Loader';

// == Composant
const App = () => {
  // to verify if a user is connected we need to get the localStorage 'user_token'
  const localStorageToken = localStorage.getItem('user_token');
  // and then use it in action verifyUsertokenInLocalstorage and decodeTokenToSaveUsername

  // Dispatch all data we want when we visit the app
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsFromApi());
    dispatch(getUserItemsFromApi());
    dispatch(getModeFromApi());
    dispatch(getUserFromApi());
    dispatch(verifyUsertokenInLocalstorage(localStorageToken));
    dispatch(decodeTokenToSaveUsername(localStorageToken));
    dispatch(getReco());
  }, []);

  // State logged true or false, to display different pages according to its state
  const logged = useSelector((state) => state.login.logged);

  return (
    <div className="container-app">
      <Header />
      <Loader />
      <div className="app">
        <User />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<SignUp />} />

          {logged && <Route path="/:slug/liste" element={<StatusFilter />} />}
          {logged && <Route path="/:slug/liste/ajouter" element={<Add />} />}
          {logged && <Route path="/:slug/liste/recommandations" element={<Reco />} />}
          {logged && <Route path="/:slug/liste/:id" element={<ItemDetails />} />}
          {logged && <Route path="/*" element={<Error404 />} />}
          {!logged && <Route path="/*" element={<Error401 />} />}

          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<Team />} />
          <Route path="/cgu" element={<Cgu />} />
          <Route path="/mentions-legales" element={<Legal />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

// == Export
export default App;
