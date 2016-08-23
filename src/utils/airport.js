import * as lib from '../lib/airports.js';

module.exports = {
  findAirportCoordinates: (airportOne, airportTwo) => {
    const coordinates = { lat1: null, lat2: null, lon1: null, lon2: null };
    // parses through airports and grabs latitude and longitude
    if (airportOne && airportTwo) {
      airportOne = airportOne.toUpperCase();
      airportTwo = airportTwo.toUpperCase();
      for (let i = 0; i < lib.airports.length; i++) {
        if (airportOne === lib.airports[i].iata) {
          coordinates.lat1 = lib.airports[i].lat;
          coordinates.lon1 = lib.airports[i].lon;
        }
        if (airportTwo === lib.airports[i].iata) {
          coordinates.lat2 = lib.airports[i].lat;
          coordinates.lon2 = lib.airports[i].lon;
        }
      }
    }
    return coordinates;
  },
}
