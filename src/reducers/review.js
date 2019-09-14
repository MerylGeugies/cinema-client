import {ADD_REVIEW} from '../actions/review';

export default function (state = [], action = {}) {
  console.log('reducer', action.payload)
  switch (action.type) {
    case ADD_REVIEW:
      return action.payload
    default:
      return state
  }
}