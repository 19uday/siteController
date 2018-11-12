import { siteImageConstants } from '../_constants';

const initialState = {
  requesting2: false,
  siteImage: {},
  loaded2: false
}

export function siteImage(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case siteImageConstants.GET_SITEIMAGE_REQUEST:
      return {
        ...state,
        requesting2: true,
        loaded2: false
      };
    case siteImageConstants.GET_SITEIMAGE_SUCCESS:
      return {
        ...state,
        requesting2: false,  
        siteImage: action.siteImage,
        loaded2: true
      };
    case siteImageConstants.GET_SITEIMAGE_FAILURE:
      return {
        ...state,
        requesting2: false,
        error: action.error,
        loaded2: false
      };
    default:
      return state
  }
}
