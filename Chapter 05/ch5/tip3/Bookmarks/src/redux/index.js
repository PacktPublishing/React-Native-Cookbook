import { combineReducers } from 'redux'
import bookmarks from './modules/bookmarks/reducer'

const reducers = combineReducers({
  bookmarks,
});
