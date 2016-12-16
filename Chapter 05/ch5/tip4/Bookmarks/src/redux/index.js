import { combineReducers, createStore } from 'redux';
import bookmarks from './modules/bookmarks/reducer';

const reducers = combineReducers({
  bookmarks,
});

const store = createStore(reducers);
export default store;

// These will lines are just for testing and will be removed
// on the next recipe.
import { loadBookmarks, addBookmark, removeBookmark, updateBookmark } from './modules/bookmarks/actions';

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(loadBookmarks());
store.dispatch(addBookmark({
  id: 2,
  title: 'One more',
  url: 'http://other.com',
}));
store.dispatch(updateBookmark({
  id: 2,
  title: 'One more edited',
  url: 'http://other-edit.com',
}));
store.dispatch(removeBookmark({ id: 1 }));

unsubscribe();
