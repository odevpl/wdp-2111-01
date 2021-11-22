import { combineReducers, createStore } from 'redux';

import brandsReducer from './brandsRedux';
import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import compareReducer from './compareRedux';
import feedbacksReducer from './feedbacksRedux';
import initialState from './initialState';
import modeReducer from './modeRedux';
import productsReducer from './productsRedux';

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  compare: compareReducer,
  products: productsReducer,
  mode: modeReducer,
  brands: brandsReducer,
  feedbacks: feedbacksReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
