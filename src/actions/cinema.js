import request from 'superagent';
import { url } from '../constant';

export const ALL_CINEMAS = 'ALL_CINEMAS';
export const FETCH_REVIEW = 'FETCH_REVIEW';

export function allCinemas(payload) {
  return {
    type: ALL_CINEMAS,
    payload
  }
}

export const getCinemas = () => (dispatch, getState) => {
  const state = getState()
  const { cinemas } = state
  // console.log('state in action getCinemas', state)
  // console.log('cinemas from action', cinemas)

  // if (cinemas.length === 0) {
    request
      .get(`${url}/cinemas`)
      .then(response => {
        const action = allCinemas(response.body)

        dispatch(action)
        // console.log('response.body getCinemas',response.body)
      })
      .catch(console.error)
  
}

function fetchReview(payload) {
  return {
    type: FETCH_REVIEW,
    payload: payload
  }
}
export const detailAllCinema = cinemaId => dispatch => {
  request
    .get(`${url}/cinema/${cinemaId}`)
    .then(response => {
      const action = fetchReview(response.body)
      // console.log('cinema from action', action)
      console.log('ACTION:', response.body)
      dispatch(action)
    })
    .catch(console.error)
}