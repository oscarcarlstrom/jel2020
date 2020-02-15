import React from 'react'
import styled from 'styled-components';
import { Marker, Popup } from 'react-leaflet';

const PopContent = styled(Popup)`
  padding: 12px;
`;

const Line = styled.p`
  margin: 0 !important;
  margin-bottom: 8px !important;
`

const MapMarkers = ({ data }) => {
  return Object.values(data).map((device, index) => {
    return (
      <Marker key={`marker-${index}`} position={[59.436691, 10.594773]}>
        <PopContent>
          <Line>Temperatur: {device.TEMP}</Line>
          <Line>Fuktighet: {device.HUMID}</Line>
          <Line>Lufttrykk: {device.AIR_PRESS}</Line>
          <Line>Luftkvalitet: {device.AIR_QUAL}</Line>
        </PopContent>
      </Marker>
    )
  })
}

export default MapMarkers
