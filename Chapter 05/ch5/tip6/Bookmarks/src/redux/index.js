import { applyMiddleware, combineReducers, createStore } from 'redux';
import fetchMiddleware from './middleware/fetchMiddleware';
import bookmarks from './modules/bookmarks/reducer';
import categories from './modules/categories/reducer';

const reducers = combineReducers({
  bookmarks,
  categories,
});

const store = createStore(reducers, applyMiddleware(fetchMiddleware));

export default store;
