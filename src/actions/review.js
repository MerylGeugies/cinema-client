import request from 'superagent';
import { url } from '../constant';

export const ADD_REVIEW = 'ADD_REVIEW';

export function addReview(payload) {
  return {
    type: ADD_REVIEW,
    payload
  }
}

export const makeReview = data => async dispatch => {
  await request
  .post(`${url}/reviews`)
  .send(data)
  .then(response => {
    console.log('addReview', response.body)
    const action = addReview(response.body)
    dispatch(action)
  })
  .catch(console.error)
}