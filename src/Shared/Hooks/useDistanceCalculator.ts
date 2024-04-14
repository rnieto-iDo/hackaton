import { useState, useEffect } from "react";
import { ICoordinate } from "../Utils/interfaces";

const toRadians = (degrees: number) => {
  return (degrees * Math.PI) / 180;
};

const useDistanceCalculator = (coords1: ICoordinate, coords2: ICoordinate) => {
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    if (coords1 && coords2) {
      const earthRadiusKm = 6371;

      const lat1 = coords1.latitude;
      const lon1 = coords1.longitude;
      const lat2 = coords2.latitude;
      const lon2 = coords2.longitude;

      const dLat = toRadians(lat2 - lat1);
      const dLon = toRadians(lon2 - lon1);

      const lat1Rad = toRadians(lat1);
      const lat2Rad = toRadians(lat2);

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
          Math.sin(dLon / 2) *
          Math.cos(lat1Rad) *
          Math.cos(lat2Rad);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const calculatedDistance = earthRadiusKm * c;
      setDistance(calculatedDistance);
    } else {
      setDistance(null);
    }
  }, [coords1, coords2]);

  return distance ? Math.floor(distance) : null;
};

export default useDistanceCalculator;
