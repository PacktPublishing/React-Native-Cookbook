import {
  LOAD_BOOKMARKS,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  UPDATE_BOOKMARK,
} from './actions';

const initialState = {
  bookmarks: [],
};

export default function reducer(state= initialState, action) {
  switch (action.type) {
    case LOAD_BOOKMARKS:
      return {
        ...state,
        bookmarks: [...action.payload],
      };
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(bookmark => bookmark.id !== action.payload.id),
      };
    case UPDATE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.map(bookmark => {
          if(bookmark.id === action.payload.id) {
            return {
              ...action.payload,
            };
          }
          return bookmark;
        }),
      };
    default:
      return state;
  }
}
