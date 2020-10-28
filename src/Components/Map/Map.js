import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

import "./Map.scss";

function Map() {
  const DEFAULT_LATITUDE = -7.257472;
  const DEFUALT_LANGITUDE = 112.75209;

  return (
    <div className="map">
      <LeafletMap center={[DEFAULT_LATITUDE, DEFUALT_LANGITUDE]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeafletMap>
    </div>
  );
}

export default Map;
