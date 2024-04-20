import { useEffect, useRef } from "react";
import { PageLayout } from "../../../Shared/Containers/pageLayout";

import { useAppDispatch, useAppSelector } from "../../../Shared/App/hook";

import { DestinationList } from "../Components/DestinationList";

import { fetchAllDestinations } from "../../destinations/Slices/destinationsSlice";

export const HomeDestinations = () => {
  const dispatch = useAppDispatch();
  const HomeDestinations = useAppSelector((state) => state.destinations);
  const currentLocationRef = useRef({ latitude: 0, longitude: 0 });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      currentLocationRef.current = { latitude, longitude };
    });
  }

  useEffect(() => {
    dispatch(fetchAllDestinations());
    console.log("fetching destinations", HomeDestinations.destinations);
  }, []);

  return (
    <PageLayout pageName={` Destinations`}>
      <DestinationList
        destinations={HomeDestinations.destinations}
        currentLocation={currentLocationRef.current}
      />
    </PageLayout>
  );
};
