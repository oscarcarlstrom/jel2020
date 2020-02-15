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

const Map = props => {
  return (
    <LeafletMap center={props.position} zoom={16} className="mapContainer">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={props.position}>
        <PopContent>Hello jeløya</PopContent>
      </Marker>
    </LeafletMap>
  )
}

export default Map;
