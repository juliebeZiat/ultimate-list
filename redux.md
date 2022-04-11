# Redux JS

Première chose à faire : importer l'enhancer pour activer l'extension **Redux** : dans le terminal, on lance `yarn add redux-devtools-extension`. L'extension nous permet de suivre les actions qui se passent dans le store.

Pour une application React avec peu de fonctionnalités, la solution "state dans App" fonctionne bien. Avec l'augmentation des fonctionnalités de l'application, ça devient le bazar dans App, beaucoup de code, difficile à maintenir
=> on va sortir le state de notre application, le stocker dans un store (par exemple un store Redux).

---

## Store

Le [store](https://redux.js.org/api/createstore) est le "gardien" de notre state : il le stocke et il le protège (il autorisera seulement certaines modifications).

**Étape 1** : Installation

`yarn add redux react-redux`

**Étape 2** : Mise en place du store

- Créer un reducer : `src/reducers/nameForTheReducer.js`
- Voir étape Reducer ↓

- Créer le store : `src/store/index.js`

```js
import { createStore } from 'redux';
// Gestion de l'extension Redux
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from 'src/reducers/nameForTheReducer';

const store = createStore(reducer, devToolsEnhancer());

export default store;
```

**Étape 3** : Utilisation du composant Provider

Provider permet à nos composants d'avoir accès au store

```js
[...]
import { Provider } from 'react-redux';
import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>,
  // document.getElementById('root'),
);
```

On peut utiliser le Redux Dev Tool pour vérifier que le store est fonctionnel, on devrait voir le store avec le state initial.

---

## Reducer

*Reducer* est une fonction qui fournit le nouveau state à partir du state actuel et d'une action. C'est l'assistant du store (en vrai c'est un peu lui qui fait tout le boulot, le store se contente de lui transmettre action et state, puis il récupère le nouveau state et remplace le state d'avant).

Le reducer va traduire l'action en changements des informations du state.

*Action* : c'est pour demander une modification sur le state, *par exemple (↓) "effectue une rotation de 270deg".*

```js
const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};
```

```js
const reducer = (state = initialState, action = {}) => {
  // Si l'action est 'DIRECTION_TO_LEFT', alors on indique : 270deg
  if (action.type === 'DIRECTION_TO_LEFT') {
    // On va créer une copie du state et modifier la direction ici
    const stateCopy = { ...state };
    stateCopy.direction = '270deg';
    return stateCopy;
  }

  return state;
};

export default reducer;
```

Version plus courte du code ci-dessus ↑

```js
const reducer = (state = initialState, action = {}) => {

  if (action.type === 'DIRECTION_TO_LEFT') {
    const stateModified = {
      // on déverse toutes les infos du state actuel
      ...state,
      // on applique les modifications
      direction: '270deg',
    };
    return stateModified;
  }

  return state;
};
```

C'est comme si on faisait :

```js
    return {
      firstColor: state.firstColor,
      lastColor: state.lastColor,
      direction: state.direction,
      nbColors: state.nbColors,
      direction: '270deg',
    }
```

Quand le store est créé, il ne contient pas encore de state. Il va faire appel au reducer avec un state vide (undefined) et une action spéciale "INIT".

**Paramètre par défaut pour une fonction** : si la fonction est appelée avec ce paramètre qui n'a pas de valeur, alors dans le corps de la fonction la valeur par défaut sera utilisée pour ce paramètre.

Si on appelle la fonction reducer avec un paramètre state undefined : `reducer(undefined, "INIT")`
=> quand on écrit `return state`, en fait ça va retourner `initialState`.

---

## Action

Une action = une intention / *ex.: store change la direction pour aller vers la gauche*

Une action = objet qui contient l'intention dans sa propriété `type` (toujours appelé type).

On veut appliquer un changement sur le state : on envoie une action au store (`dispatch`), le store transmettra l'action au reducer avec le state actuel, le reducer se débrouillera pour traduire notre intention en modification sur le state.

```js
document.getElementById('toLeft')
  .addEventListener('click', () => {

    const action = {
      type: 'DIRECTION_TO_LEFT',
    };

    // On dispatch l'action vers le store => dispatch
    store.dispatch(action);

  });
```

---

## Résumé des points précédents

*Objectif* : faire fonctionner le bouton "to right"

**Plan d'action** :

- dispatch l'action (src/index.js, handler du bouton)
- dans le reducer, mettre en place le traitement pour cette action

**Étape 1** : Dispatch de l'action

```js
const action = {
      type: 'DIRECTION_TO_RIGHT',
    };

    store.dispatch(action);
```

**Étape 2** : Traitement de l'action dans le reducer

On part de l'exemple dans 'Reducer' mais on utilise pas la condition `if` mais `switch` comme dans l'exemple [ici](https://putaindecode.io/articles/redux-comment-ca-marche/#:~:text=Redux%20est%20une%20impl%C3%A9mentation%20d%C3%A9riv%C3%A9e,sorte%20pre%2Dprocess%20les%20actions.)

```js
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'DIRECTION_TO_LEFT':
      return {
        // on déverse toutes les infos du state actuel
        ...state,
        // on applique les modifications
        direction: '270deg',
      };
    case 'DIRECTION_TO_RIGHT':
      return {
        ...state,
        direction: '90deg',
      };
    default:
      return state;
  }
};
```

---

## Le payload

Une action c'est un objet qui contient au minimum une propriété "type". Il peut contenir aussi d'autres propriétés : on appelle ces informations le payload ("chargement") de l'action. Ici, on définit une info supplémentaire pour appliquer le traitement demandé (ici, `randomHewColor`).

```js
const newColor = randomHexColor();
const action = {
    type: 'CHANGE_FIRST_COLOR',
    color: newColor,
};

store.dispatch(action);
```

Puis on l'ajoute dans le reducer :

```js
case 'CHANGE_FIRST_COLOR':
    return {
    ...state,
    // On peut se servir d'une information du state actuel
    nbColors: state.nbColors + 1,
    // On appelle le payload définit juste avant
    firstColor: action.color,
    };
```

---

## Subscribe

S'abonner aux changement du state : en cas d'appel à dispatch, la callback sera automatiquement appelée. *Exemple: à chaque changement de state, on appelle ces 3 fonctions*.

```js
store.subscribe(() => {
    renderNbColors();
    renderGradient();
    renderColors();
});
```

---

## Schéma récap

![Schéma](docs/flow.svg)

---

## Annuaire des actions et factorisation

L'annuaire des actions permet de définir au préalable le nom des types pour qu'esLint corrige automatiquement. Pour cela, on a créé un dossier actions puis un fichier gradient.js

**Étape 1** : Actions Types

```js
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';
export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';
export const CHANGE_LAST_COLOR = 'CHANGE_LAST_COLOR';
```

On importe ces variables donc notre fichier reducer.js

```js
import { CHANGE_DIRECTION, CHANGE_FIRST_COLOR, CHANGE_LAST_COLOR } from '../actions/gradient';
```

Puis on adapte le nom des types, on passe par exemple de `'CHANGE_DIRECTION'` à `CHANGE_DIRECTION`.

**Étape 2** : Actions Creators

Fonction qui permet de créer une action du type indiqué = fonction qui retourne une nouvelle action

```js
export const changeDirection = (newDirection) => ({
  type: CHANGE_DIRECTION,
  direction: newDirection,
});
```

La direction est également définie dans le reducer ainsi que dans le fichier qui gère les actions. On peut donc écrire de cette manière :

```js
// Dispatch appelle l'action changeDirection
// On lui fourni en argument '315deg' (==newDirection)
store.dispatch(changeDirection('315deg'));
```

---
---

## React Redux

### useSelector

Le hook useSelector permet d'aller lire une information dans le state d'un store redux. On fournit en argument à useSelector une fonction qui sélectionne l'info dont on a besoin à partir du state. Ici on abonne aussi notre composant aux changements de state.nbColors, le composant refera son rendu si nbColors change de valeur dans le state.

```js
const NbColors = () => {
  const nbColorsFromState = useSelector((state) => state.nbColors);
  return (
    <div id="nbColors">
      {nbColorsFromState} couleur(s) générée(s)
    </div>
  );
};
```

### useDispatch

useDispatch : hook qui permet d'obtenir une référence (un raccourci) vers la fonction dispatch du store. Pas d'argument pour useDispatch. Dispatch est une fonction, on l'appellera en lui fournissant une action en argument.

```js
import { useDispatch } from 'react-redux';

[...]

const Controls = () => {
  const dispatch = useDispatch();

  return (
    <div className="buttons group">
      <button
        className="button"
        type="button"
        id="randFirst"
        onClick={() => {
          const action = changeFirstColor(randomHexColor());
          dispatch(action);
        }}
      >
        Random First
      </button>
[...]
```
