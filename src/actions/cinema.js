import request from 'superagent';
import { url } from '../constant';

export const ALL_CINEMAS = 'ALL_CINEMAS';

export function allCinemas(payload) {
  return {
    type: ALL_CINEMAS,
    payload
  }
}

export const getCinemas = () => (dispatch, getState) => {
  const state = getState()
  const { cinemas } = state
  console.log('state in action getCinemas', state)

  // if (cinemas.length === 0) {
    request
      .get(`${url}/cinemas`)
      .then(response => {
        const action = allCinemas(response.body)

        dispatch(action)
        console.log('response.body getCinemas',response.body)
      })
      .catch(console.error)
  
}