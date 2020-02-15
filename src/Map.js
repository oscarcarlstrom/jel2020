import React from 'react'
import { Map as LeafletMap , Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styled from 'styled-components';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const PopContent = styled(Popup)`
  padding: 12px;
`;

const Map = ({ data }) => {
  const markers = Object.keys(data).map(id => {
    const device = data[id]
    return (
      <Marker key={id} position={[59.436691, 10.594773]}>
        <PopContent>
          {device.TEMP}
          {device.HUMID}
          {device.AIR_PRESS}
          {device.AIR_QUAL}
        </PopContent>
      </Marker>
    )
  })

  return (
    <LeafletMap center={[59.436691, 10.594773]} zoom={16} className="mapContainer">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      { markers }
    </LeafletMap>
  )
}

export default Map;
