import React from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, GoogleMap, Marker, Polyline } from 'react-google-maps';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="map">
        <GoogleMapLoader
          containerElement={
            <div
              {...this.props}
              style={{
                height: "100%"
              }} >
            </div>
          }
          googleMapElement={
            <GoogleMap
              center={this.props.center}
              defaultZoom={4}
              ref="map">

              {this.props.markers.map((marker) => {
                return (
                  <Marker
                    position={marker.position} >
                  </Marker>
                );
              })}

              <Polyline
                path={this.props.path}
                options={{
                  strokeColor: '#FF0000',
                  strokeOpacity: 1.0,
                  strokeWeight: 2,
                }}
              />
            </GoogleMap>
          }
        />
      </section>
    );
  }
}

function mapStateToProps(state) {
  const airportCoordinates = state.airportMap;
  // setting default position to the middle of America to center map
  const center = {
    lat: parseFloat(38),
    lng: parseFloat(-97),
  };
  const markers = airportCoordinates || [center, center];
  let path = [];
  // if there are valid coordinates, then set polyline path
  if (airportCoordinates.length) {
    const position1 = airportCoordinates[0].position;
    const position2 = airportCoordinates[1].position;
    path.push(position1);
    path.push(position2);
  }
  return {
    airportCoordinates,
    markers,
    center,
    path,
  }
}

export default connect(mapStateToProps)(Map);
