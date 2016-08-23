import * as actionTypes from '../constants/actionTypes.js';

const initialState = [];

function setAirportMapInfo(state, action) {
  // parseFloat latitudes and longitudes so Google Maps API can successfully take it
  const airportOneCoordinates = {
    lat: parseFloat(action.coordinates.lat1),
    lng: parseFloat(action.coordinates.lon1),
  };
  const airportTwoCoordinates = {
    lat: parseFloat(action.coordinates.lat2),
    lng: parseFloat(action.coordinates.lon2),
  };
  const newCoordinates = [
    { position: airportOneCoordinates },
    { position: airportTwoCoordinates },
    { isSubmitted: true },
    { submittedAirports:
      { airportOne: action.airportOneCurrText,
        airportTwo: action.airportTwoCurrText} }
  ];
  return newCoordinates;
}

export default function(state = initialState, action) {
  switch(action.type) {
    case actionTypes.SET_MAP_INFO:
      return setAirportMapInfo(state, action);
    default:
      return state;
  }
}
