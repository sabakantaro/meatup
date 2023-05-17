import * as geolib from "geolib";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

function Map({ events }: any) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = events.map((result: any) => ({
    longitude: result.place.longitude,
    latitude: result.place.latitude,
  }));
  const center = geolib.getCenter(coordinates);
  const [viewState, setViewState] = useState<any>({
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
      onMove={(e: any) => setViewState(e.viewState)}
    >
      {events.map((result: any) => (
        <div key={result.place.longitude}>
          <Marker
            longitude={result.place.longitude}
            latitude={result.place.latitude}
            offset={[-20, -10]}
          >
            <p
              role='img'
              onClick={() => setSelectedLocation(result.place)}
              className='cursor-pointer text-2xl animate-bounce'
              aria-label='push-pin'
            >
              📍
            </p>
          </Marker>
          {
            // @ts-ignore
            selectedLocation.longitude === result.place.longitude ? (
              <Popup
                onClose={() => setSelectedLocation(false)}
                closeButton={true}
                closeOnClick={false}
                latitude={result.place.latitude}
                longitude={result.place.longitude}
              >
                {result.place.location}
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
