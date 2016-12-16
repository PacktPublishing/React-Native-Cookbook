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

// These lines of code will be removed on the next recipe
import { loadCategories } from './modules/categories/actions';
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(loadCategories());
