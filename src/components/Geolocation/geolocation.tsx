import React, { useEffect } from "react";
import { useGeolocation } from "@uidotdev/usehooks";

interface GeoProps {
  setLatitude: React.Dispatch<React.SetStateAction<number>>;
  setLongitude: React.Dispatch<React.SetStateAction<number>>;
}

const GeoLocation: React.FC<GeoProps> = (props) => {
  const state = useGeolocation();
  // console.log("geolocation", props);
  useEffect(() => {
    if (
      !state.loading &&
      !state.error &&
      state.latitude != null &&
      state.longitude != null
    ) {
      props.setLatitude(state.latitude);
      props.setLongitude(state.longitude);
    }
  }, [state.loading, state.error, state.latitude, state.longitude, props]);

  if (state.loading) {
    return <p>загрузка данных... Разрешите браузеру получить вашу локацию.</p>;
  }

  if (state.error) {
    return <p>Enable access about your location</p>;
  }

  return (
    <>
      <h2>latitude: {state.latitude}</h2>
      <h2>longitude: {state.longitude}</h2>
    </>
  );
};

const MemoizedLocation = React.memo(GeoLocation);

export default MemoizedLocation;
