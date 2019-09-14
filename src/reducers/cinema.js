import {ALL_CINEMAS} from '../actions/cinema';

export default function (state = [], action = {}) {
  console.log('reducer', action.payload)
  switch (action.type) {
    case ALL_CINEMAS:
      return action.payload
    default:
      return state
  }
}