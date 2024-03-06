import { useState, useEffect } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import { socketService } from "@/services/socket";
import ControlPanel from "@/components/mapComponents/ControlPanel.tsx";
import DrownIcon from "@/assets/icons/DrownIcon.tsx";
import { Feature, FlightsRespons } from "@/types";
import { checkCanFly } from "@/helpers";
import { INITIAL_VIEW_SETTINGS } from "@/constants";

const TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
export default function MapContainer() {
  const [popupInfo, setPopupInfo] = useState<Feature | null>(null);
  const [drones, setDrones] = useState<Feature[]>([]);
  const [viewState, setViewState] = useState(INITIAL_VIEW_SETTINGS);

  useEffect(() => {
    socketService.connect();
    socketService.listenForMessages((data: FlightsRespons) => {
      setDrones((prv) => [...prv, ...data.features]);
    });
    return () => {
      socketService.disconnect();
    };
  }, []);

  return (
    <>
      <Map
        {...viewState}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={TOKEN}
        onMove={(evt) => setViewState(evt.viewState)}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {drones.map((drone, index) => (
          <Marker
            key={index}
            latitude={drone.geometry.coordinates[1]}
            longitude={drone.geometry.coordinates[0]}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopupInfo(drone);
            }}
          >
            {checkCanFly(drone.properties.registration) ? (
              <DrownIcon fill={"#00FF00"} yaw={drone.properties.yaw} />
            ) : (
              <DrownIcon yaw={drone.properties.yaw} />
            )}
          </Marker>
        ))}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.geometry.coordinates[0])}
            latitude={Number(popupInfo.geometry.coordinates[1])}
            onClose={() => setPopupInfo(null)}
          >
            <ul className="text-gray-900">
              <li>Name : {popupInfo.properties.Name}</li>
              <li>Altitude : {popupInfo.properties.altitude}</li>
            </ul>
          </Popup>
        )}
      </Map>

      {drones?.[0] ? (
        <ControlPanel drones={drones} setViewState={setViewState} />
      ) : null}
    </>
  );
}
