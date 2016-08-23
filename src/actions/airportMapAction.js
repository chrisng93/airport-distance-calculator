import * as actionTypes from '../constants/actionTypes.js';
import * as util from '../utils/airport.js';

export function setAirportMapInfo(airportOneCurrText, airportTwoCurrText) {
  // gets latitude and longitude of submitted airports
  const coordinates = util.findAirportCoordinates(airportOneCurrText, airportTwoCurrText);
  return {
    type: actionTypes.SET_MAP_INFO,
    coordinates, airportOneCurrText, airportTwoCurrText
  };
}
