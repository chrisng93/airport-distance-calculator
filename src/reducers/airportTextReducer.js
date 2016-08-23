import * as actionTypes from '../constants/actionTypes.js';

const initialState = {};

function setAirportText(state, action) {
  // sets input's current text based on airportNum
  if (action.airportNum === '1') {
    return Object.assign({}, state, {
      airportOneCurrText: action.currText
    });
  } else {
    return Object.assign({}, state, {
      airportTwoCurrText: action.currText
    });
  }
}

export default function(state = initialState, action) {
  switch(action.type) {
    case actionTypes.SET_AIRPORT_TEXT:
      return setAirportText(state, action);
    default:
      return state;
  }
}
