import { combineReducers } from 'redux';
import airportMap from './airportMapReducer.js';
import airportText from './airportTextReducer.js';
import suggestions from './suggestionsReducer.js';

export default combineReducers({
  airportMap,
  airportText,
  suggestions,
});
