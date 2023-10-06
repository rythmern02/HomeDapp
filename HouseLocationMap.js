import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-bing/lib/index.css';

const MapComponent = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default coordinates

  const handleMapClick = (e) => {
    setPosition([e.latlng.lat, e.latlng.lng]);
    console.log('Latitude:', e.latlng.lat);
    console.log('Longitude:', e.latlng.lng);
  };

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '500px', width: '100%' }}
      onClick={handleMapClick}
    >
      <TileLayer
        url="https://tiles.bing.com/btiles/{variant}?g=4848&mkt=en-US&n=z&v=1&x={x}&y={y}&z={z}&s=Galile&o=11100013200"
        attribution='&copy; <a href="https://www.microsoft.com/en-us/maps/product/maps">Microsoft</a> (Terms of Use)'
        variant="road"
      />
      <Marker position={position}>
        <Popup>Your House Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
