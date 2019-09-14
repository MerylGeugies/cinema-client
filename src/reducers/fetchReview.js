import {FETCH_REVIEW} from '../actions/cinema'

export default function (state = null, action = {}) {
  // console.log('reducer fetch Review', action.payload)
  switch (action.type) {
    case FETCH_REVIEW:
      console.log('ACTION.type', action.type, action.payload)
      return action.payload
    default:
      return state
  }
}