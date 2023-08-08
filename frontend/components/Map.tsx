import * as geolib from "geolib";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Event } from "@/typings";

type MapProps = {
  events: Event[];
};

const Map: React.FC<MapProps> = ({ events }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = events.map((event) => ({
    longitude: event.place.longitude,
    latitude: event.place.latitude,
  }));
  const center = geolib.getCenter(coordinates);
  const [viewState, setViewState] = useState<Object>({
    // @ts-ignore
    longitude: center.longitude,
    // @ts-ignore
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      style={{ width: "100%", height: "100%" }}
      {...viewState}
      mapStyle='mapbox://styles/ryosuke8291/clg8pdois001i01pgqj6xnd0z'
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(e) => setViewState(e.viewState)}
    >
      {events.map((event) => (
        <div key={event.place.id}>
          <Marker
            longitude={Number(event.place.longitude)}
            latitude={Number(event.place.latitude)}
            offset={[-20, -10]}
          >
            <p
              role='img'
              onClick={() => setSelectedLocation(event.place)}
              className='cursor-pointer text-2xl animate-bounce'
              aria-label='push-pin'
            >
              📍
            </p>
          </Marker>
          {
            // @ts-ignore
            selectedLocation.longitude === event.place.longitude ? (
              <Popup
                onClose={() => setSelectedLocation(false)}
                closeButton={true}
                closeOnClick={false}
                latitude={Number(event.place.latitude)}
                longitude={Number(event.place.longitude)}
              >
                {event.place.location}
              </Popup>
            ) : (
              false
            )
          }
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
