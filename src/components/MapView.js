import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapView extends Component {
  render() {
    const style = {
        width: '100%',
        height: '100%'
      }
    return (
      <div className="w-full h-screen">
        <Map style={style}  initialCenter={{
            lat: 30.64120,
            lng: 73.15090
          }}  google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

         
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB5gXQchYxHXWxFIMvFYayKi4XfGVhsTsE",
})(MapView);
