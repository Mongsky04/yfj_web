import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const defaultCenter = {
  lat: -6.1499926714737105,
  lng: 106.88673170291361
};

export default function OSMMap({
  center = defaultCenter,
  zoom = 60          
}) {
  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={zoom}
      style={{ height: '200px', width: '100%'}}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[center.lat, center.lng]}>
        <Popup>
          Our Location<br />Jl. Mitra Sunter Boulevard...
        </Popup>
      </Marker>
    </MapContainer>
  );
}
