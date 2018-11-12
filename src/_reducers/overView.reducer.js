import { overViewConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  requesting: false,
  overView: user ? user.overView : null,
  loaded: false
}

export function overView(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case overViewConstants.GET_OVERVIEW_REQUEST:
      return {
        ...state,
        requesting: true,
        loaded: false
      };
    case overViewConstants.GET_OVERVIEW_SUCCESS:
      return {
        ...state,
        requesting: false,  
        overView: action.overView,
        loaded: true
      };
    case overViewConstants.GET_OVERVIEW_FAILURE:
      return {
        ...state,
        requesting: false,
        error: action.error,
        loaded: false
      };
    default:
      return state
  }
}
