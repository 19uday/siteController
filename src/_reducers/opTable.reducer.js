import { opTableConstants } from '../_constants';

const initialState = {
  requesting1: false,
  opTable: {},
  loaded1: false
}

export function opTable(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case opTableConstants.GET_OPTABLE_REQUEST:
      return {
        ...state,
        requesting1: true,
        loaded1: false
      };
    case opTableConstants.GET_OPTABLE_SUCCESS:
      return {
        ...state,
        requesting1: false,  
        opTable: action.opTable,
        loaded1: true
      };
    case opTableConstants.GET_OPTABLE_FAILURE:
      return {
        ...state,
        requesting1: false,
        error: action.error,
        loaded1: false
      };
    default:
      return state
  }
}
