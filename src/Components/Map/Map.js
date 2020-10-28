import React, { Component } from "react";
import { Map as LeafletMap, Marker, Popup, TileLayer } from "react-leaflet";
import { geolocated } from "react-geolocated";
import CurveLoading from "../../assets/CurveLoading.gif";
import "./Map.scss";

const DEFAULT_LONGITUDE = 112.75209;
const DEFAULT_LATITUDE = -7.257472;

class Map extends Component {
  render() {
    const longitude = this.props.coords
      ? this.props.coords.longitude
      : DEFAULT_LONGITUDE;
    const latitude = this.props.coords
      ? this.props.coords.latitude
      : DEFAULT_LATITUDE;

    return (
      <div className="map">
        <LeafletMap center={[longitude, latitude]} zoom={12}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {!this.props.coords ? (
            <img src={CurveLoading} alt="" />
          ) : (
            <Marker position={[longitude, latitude]}>
              <Popup>yoo</Popup>
            </Marker>
          )}
        </LeafletMap>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Map);
