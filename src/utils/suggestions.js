import * as lib from '../lib/airports.js';

module.exports = {
  populateSuggestions: (text) => {
    // checks the user's current inputs against the airport JSON file
    const matches = [];
    if (text) {
      text = text.toUpperCase();
      for (let i = 0; i < lib.airports.length; i++) {
        if (lib.airports[i].iata.indexOf(text) !== -1) {
          matches.push(lib.airports[i]);
        }
      }
    }
    return matches;
  },
}
