import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const DEFAULT_POSITION = [9.847450013038586, -83.91096840000002];

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function SchoolMap({
  position = DEFAULT_POSITION,
  zoom = 15,
  height = "100%",
  interactive = true,
  popupText = "CTP Dulce Nombre",
}) {
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={interactive}
      zoomControl={interactive}
      dragging={interactive}
      doubleClickZoom={interactive}
      attributionControl={false}
      style={{
        height,
        width: "100%",
        pointerEvents: interactive ? "auto" : "none",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={markerIcon}>
        {popupText && <Popup>{popupText}</Popup>}
      </Marker>
    </MapContainer>
  );
}
