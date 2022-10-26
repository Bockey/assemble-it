import Info from "./Info";
import FormEl from "./Form";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Kontakt(props) {
  return (
    <div className="contact">
      <div className="container">
            <Info />
            <FormEl />
            <div className="location">
              <MapContainer
              center={[59.9377644, 10.8795503]}
              zoom={12}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[59.9372844, 10.8812603]}>
                <Popup>
                
                  Micheletveien 54, 1053 Oslo
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      
  );
}

export default Kontakt;
