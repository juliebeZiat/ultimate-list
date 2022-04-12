// == Import react
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// == Import functions
import { findItemsByMode } from 'src/functions/items';

// Import action
import {
  changeInputSearchValue,
} from 'src/actions/items';

// == Import Components
import Lists from '../index';
import RecoAdd from './RecoAdd';
import SearchResults from './SearchResults';

const Add = () => {
  // controlled field for the input search
  const inputValue = useSelector((state) => state.items.inputSearchValue);
  const dispatch = useDispatch();

  // var used to display the recommendation
  const items = useSelector((state) => state.items.list);
  const { slug } = useParams();
  const itemsFiltered = findItemsByMode(items, slug);

  // var used to display the search results
  // to compare the input value to the item's array we need to take it from the state
  // and put it in lowercase so it won't be case sensitive
  const stringToSearch = useSelector((state) => state.items.inputSearchValue).toLowerCase();
  // then the item's array is filtered by putting item's name in lowercase also and
  // searching the input value in item's name
  const searchResults = itemsFiltered.filter(
    (item) => item.name.toLowerCase().includes(stringToSearch),
  );

  console.log('items filtered', itemsFiltered);

  // function to dynamize mod's subtitle
  const modSubtitle = () => {
    switch (slug) {
      case 'jeuxvideo': return 'jeu vidéo';
      case 'podcasts': return 'podcast';
      default: return '';
    }
  };

  return (
    <>
      <Lists />
      <div className="add">
        <div className="add-search">
          <h2 className="add-modSubtitle">Ajouter un {modSubtitle()}</h2>
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
        </div>

        {(inputValue !== '') && <SearchResults searchResults={searchResults} />}
        {(inputValue === '') && <RecoAdd recommendations={itemsFiltered} />}
      </div>
    </>
  );
};

// == Export
export default Add;
