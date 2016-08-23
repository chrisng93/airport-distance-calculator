import * as actionTypes from '../constants/actionTypes.js';

const initialState = {};

function setSuggestions(state, action) {
  // sets suggestions based on airportNum
  if (action.airportNum === '1') {
    return Object.assign({}, state, {
      airportOneSuggestions: action.suggestions
    });
  } else {
    return Object.assign({}, state, {
      airportTwoSuggestions: action.suggestions
    });
  }
}

export default function(state = initialState, action) {
  switch(action.type) {
    case actionTypes.SET_SUGGESTIONS:
      return setSuggestions(state, action);
    default:
      return state;
  }
}
