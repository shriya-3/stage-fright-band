import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix missing marker icons when deploying
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configure Leaflet's default marker icon
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const AmerAir = () => {
  const position = [32.7905, -96.8103]; // Coordinates for 2500 Victory Ave, Dallas, TX

  return (
    <MapContainer center={position} zoom={15} style={{ height: "320px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          2500 Victory Ave, Dallas, TX 75219
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default AmerAir;
