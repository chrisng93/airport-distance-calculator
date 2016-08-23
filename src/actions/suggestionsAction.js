import * as actionTypes from '../constants/actionTypes.js';
import * as utils from '../utils/suggestions.js';

export function setSuggestions(currText, airportNum) {
  // populates suggestions based on current text in input box
  const suggestions = utils.populateSuggestions(currText);
  return {
    type: actionTypes.SET_SUGGESTIONS,
    suggestions, airportNum
  };
}
