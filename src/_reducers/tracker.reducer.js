  const initialState = {
    currentrow: '',
    currentzone: '',
    openzonedata: false,
  } 
  
  export function tracker(state, action) {
    if (typeof state === 'undefined') {
      return initialState
    }
    switch (action.type) {
  
      case 'setr':
        return {
          ...state,
          currentrow: action.row
        };
  
      case 'setz':
      return {
        ...state,
        currentzone: action.zone
      };
  
      default:
        return state
    }
  }