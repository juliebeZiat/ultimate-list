// == Import
import { useDispatch, useSelector } from 'react-redux';

// Import action
import {
  hideAddRecommendation,
  changeInputSearchValue,
} from 'src/actions/items';

// == Import Components
import Lists from '../index';
import RecoAdd from './RecoAdd';
import SearchResults from './SearchResults';

const Add = () => {
  // var used for input search
  const inputValue = useSelector((state) => state.items.inputSearchValue);
  console.log(inputValue);
  const isRecoAddShowing = useSelector((state) => state.items.displayAddReco);
  const dispatch = useDispatch();

  return (
    <>
      <Lists />
      <div className="add">
        <div className="add-search">
          <h2 className="add-modSubtitle">Ajouter un jeu vidéo</h2>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log('je fais une recherche');

              // when a search is submitted, add's recommendation should disappear
              dispatch(hideAddRecommendation());

              // cleaning the input value for next search
              dispatch(changeInputSearchValue(''));
            }}
          >
            <input
              className="input-search"
              placeholder="Assassin's Creed, Elden Ring, God of War..."
              type="search"
              id="item-search"
              value={inputValue}
              onChange={(event) => {
                dispatch(changeInputSearchValue(event.target.value));
              }}
            />
          </form>
        </div>

        {!isRecoAddShowing && <SearchResults />}
        {isRecoAddShowing && <RecoAdd />}
      </div>
    </>
  );
};

// == Export
export default Add;
