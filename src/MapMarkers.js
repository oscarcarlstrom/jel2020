import React from 'react'
import styled from 'styled-components';
import { Marker, Popup } from 'react-leaflet';
import Icons from './Icons';

const PopContent = styled(Popup)`
  padding: 12px;
`;

const Line = styled.p`
  margin: 0 !important;
  margin-bottom: 8px !important;
`;

const MapMarker = ({ device, position }) => {
  let icon = Icons.greenIcon;

  if(device.BUTTON == 1) {
    icon = Icons.redIcon;
  }
  
  if (device.FLIP === "UPSIDE_DOWN") {
    icon = Icons.yellowIcon;
  }
  
  return (
    <Marker position={device.location} icon={icon}>
      <PopContent>
        <Line>Temperatur: {device.TEMP}</Line>
        <Line>Fuktighet: {device.HUMID}</Line>
        <Line>Lufttrykk: {device.AIR_PRESS}</Line>
        <Line>Luftkvalitet: {device.AIR_QUAL}</Line>
      </PopContent>
    </Marker>
  )
}

const MapMarkers = ({ data, position }) => {
  console.log('MapMarkers got props', data);

  const markers = Object.values(data).map((device, index) => (
    <MapMarker key={`marker-${index}`} device={device} position={position} index={index} />
  ));
  
  return (
    <div>
      { markers }
    </div>
  )
};

export default MapMarkers
