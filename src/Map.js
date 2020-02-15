import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [59.436691, 10.594773]

function MyMap() {
  return (
    <Map center={position} zoom={13} className="mapContainer">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </Map>
  )
}

export default MyMap
