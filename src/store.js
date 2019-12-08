import { createStore } from 'redux';
import { initialChalets } from './data';

const initialState = {
  chalets: initialChalets,
};

function reducer(state = initialState, action) {
  return state;
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
