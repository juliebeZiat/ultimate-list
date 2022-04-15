// == Import
import { useSelector } from 'react-redux';
import './loader.scss';

// == Composant
const Loader = () => {
  const loader = useSelector((state) => state.loader.loader);

  return (
    <div className="overlay">
      {loader && (
        <div className="overlay__inner">
          <div className="overlay__content"><span className="spinner" /></div>
        </div>
      )}
    </div>
  );
};

// == Export
export default Loader;
