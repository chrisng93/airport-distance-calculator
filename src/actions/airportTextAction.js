import * as actionTypes from '../constants/actionTypes.js';

export function setAirportText(currText, airportNum) {
  return {
    type: actionTypes.SET_AIRPORT_TEXT,
    currText, airportNum
  };
}
