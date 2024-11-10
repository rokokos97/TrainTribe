import { useState, useEffect } from "react";

type Coordinates = {
  latitude: number;
  longitude: number;
};

export const useGeolocation = () => {
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (err: GeolocationPositionError) => {
        setError(err.message);
      }
    );
  }, []);
  return { location, error };
};
