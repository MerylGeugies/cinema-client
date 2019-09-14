import { combineReducers } from 'redux';
import cinemas from './cinema';
import reviews from './review';
import fetchReview from './fetchReview';
import detailAllCinema from './cinema'

export default combineReducers({
  cinemas,
  reviews,
  fetchReview,
  // detailAllCinema
})