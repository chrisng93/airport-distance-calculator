import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Search from './Search.jsx';
import Map from './Map.jsx';
import * as utils from '../utils/distance.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// conditionals in here to check if the user airport codes were valid and
		// to show the nautical miles between the two airports if the codes were valid
		return (
			<div>
				<h1 className="title">Airport Distance Calculator and Visualizer</h1>
				<Search />
				<div className="info">
					{this.props.distance === 0 && this.props.isSubmitted ?
						<div className="error-msg">Please submit valid airport codes</div> : null}
					{this.props.distance !== 0 ?
						<div className="distance">
							<span className="emphasis">Distance between {this.props.airportOne.toUpperCase().slice(0, 3)} and {this.props.airportTwo.toUpperCase().slice(0, 3)}:</span> {this.props.distance} nautical miles
						</div> : null}
				</div>
				<Map />
			</div>
		);
	}
}

function mapStateToProps(state) {
	// sets up props' initial states
	const coordinates = state.airportMap;
	let airportOne = state.airportMap[3];
	let airportTwo = state.airportMap[3];
	let distance = 0;
	let isSubmitted = state.airportMap[2];
	// checks validity of coordinates before calculating distance
	if (coordinates.length && coordinates[0].position.lat &&
		 coordinates[1].position.lng && coordinates[1].position.lat
		 && coordinates[1].position.lng) {
		const lat1 = coordinates[0].position.lat;
		const lon1 = coordinates[0].position.lng;
		const lat2 = coordinates[1].position.lat;
		const lon2 = coordinates[1].position.lng;
		distance = Math.round(utils.calcDistance(lat1, lon1, lat2, lon2));
	} else {
		distance = 0;
	}
	// only shows distance between airports or error message if there's been a submission
	if (isSubmitted) {
		isSubmitted = isSubmitted.isSubmitted;
		airportOne = state.airportMap[3].submittedAirports.airportOne;
		airportTwo = state.airportMap[3].submittedAirports.airportTwo;
	}
  return {
  	coordinates,
  	airportOne,
  	airportTwo,
  	distance,
  	isSubmitted,
  }
}

export default connect(mapStateToProps)(App);
