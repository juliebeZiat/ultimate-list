// == Import
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// == Import component
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';
import SignUp from 'src/components/SignUp';
import List from 'src/components/Lists/List';
import Error404 from 'src/components/Error404';
import Home from 'src/components/Home';
import Add from 'src/components/Lists/Add';
import User from 'src/components/User';

// == Import actions
import { getItemsFromApi } from '../../actions/items';
import { getUserItemsFromApi } from '../../actions/userItems';

// == Import style
import './styles.scss';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsFromApi());
  }, []);

  useEffect(() => {
    dispatch(getUserItemsFromApi());
  }, []);

  return (
    <div className="container-app">
      <Header />
      <div className="app">
        <User />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<SignUp />} />
          <Route path="/:slug/liste" element={<List />} />
          <Route path="/:slug/ajouter" element={<Add />} />

          <Route path="/*" element={<Error404 />} />
        </Routes>

      </div>
      <Footer />
    </div>
  );
};

// == Export
export default App;
