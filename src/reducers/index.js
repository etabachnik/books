import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import privateBookReducer from './privateBookReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  books: bookReducer,
  privateBooks: privateBookReducer,
  user: userReducer
});

export default rootReducer;