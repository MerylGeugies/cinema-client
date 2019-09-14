import { combineReducers } from 'redux';
import cinemas from './cinema';
import reviews from './review';

export default combineReducers({
  cinemas,
  reviews
})