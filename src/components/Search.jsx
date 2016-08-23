import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import SearchBar from './SearchBar.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  clearInputs() {
    // clears the input boxes
    const inputs = document.getElementsByClassName('search-bar');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  }

  render() {
    return (
      <div className="searches">
        <span className="bar-1">
          <SearchBar
            airportNum="1" />
        </span>
        <span className="submit">
          <input
            className="btn btn-default"
            type="button"
            value="Find distance"
            onClick={() => {
              this.props.setAirportMapInfo(this.props.airportOneCurrText, this.props.airportTwoCurrText);
              // clears input boxes after submission
              this.clearInputs();
            }} />
        </span>
        <span className="bar-2">
          <SearchBar
            airportNum="2" />
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const airportOneCurrText = state.airportText.airportOneCurrText;
  const airportTwoCurrText = state.airportText.airportTwoCurrText;
  return {
    airportOneCurrText,
    airportTwoCurrText,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setAirportMapInfo: (airportOneCurrText, airportTwoCurrText) => {
      // sets airport map info and then clears suggestions
      dispatch(actions.setAirportMapInfo(airportOneCurrText.slice(0, 3), airportTwoCurrText.slice(0, 3)));
      dispatch(actions.setSuggestions('', '1'));
      dispatch(actions.setSuggestions('', '2'));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
