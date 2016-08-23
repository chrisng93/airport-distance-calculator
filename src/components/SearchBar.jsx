import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // sets unique id for dropdown lists
    const listId = `autocompleted-airports-${this.props.airportNum}`
    return (
      <div>
        <label><input
          list={listId}
          placeholder="Search Airport Name by IATA"
          id={this.props.airportNum}
          className="search-bar"
          onChange={(e) => this.props.setAirportText(e.target.value, this.props.airportNum)} /></label>
        <datalist id={listId}>
          {this.props.suggestions.map((val) => {
            const suggestion = `${val.iata}, ${val.name}`
            return <option value={suggestion} />
          })}
        </datalist>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // sets the suggestions based on airportNum
  let suggestions = [];
  if (ownProps.airportNum === '1') {
    suggestions = state.suggestions.airportOneSuggestions || [];
  } else {
    suggestions = state.suggestions.airportTwoSuggestions || [];
  }
  return {
    suggestions,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setAirportText: (currText, airportNum) => {
      // when user types, update the airport text and suggestions
      dispatch(actions.setAirportText(currText, airportNum));
      dispatch(actions.setSuggestions(currText, airportNum));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
