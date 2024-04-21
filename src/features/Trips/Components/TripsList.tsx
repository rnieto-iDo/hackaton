import { useState } from "react";
import { Proposal } from "../Utils/utils";
import TripDestination from "./TripDestination";
import { tripRequest } from "../Services";

interface TripsListProps {
  data: Proposal[];
}
const TripsList = ({ data }: TripsListProps) => {
  const [hotelId, setHotelId] = useState<number | Array<number>>(0);
  const [restaurantIds, setRestaurantIds] = useState<number | Array<number>>(
    []
  );
  const [toursIds, setToursIds] = useState<number | Array<number>>([]);

  const handleSetHotelId = (hotelId: number | Array<number>) => {
    setHotelId(hotelId);
  };

  const handleSetRestaurantIds = (ids: number | number[]) => {
    if (Array.isArray(restaurantIds)) {
      setRestaurantIds([
        ...restaurantIds,
        ...(Array.isArray(ids) ? ids : [ids]),
      ]);
    } else {
      setRestaurantIds(Array.isArray(ids) ? ids : [ids]);
    }
  };

  const handleSetToursIds = (ids: number | number[]) => {
    if (Array.isArray(toursIds)) {
      setToursIds([...toursIds, ...(Array.isArray(ids) ? ids : [ids])]);
    } else {
      setToursIds(Array.isArray(ids) ? ids : [ids]);
    }
  };

  const handleTripRequest = async () => {
    const data = [
      {
        trip_request_id: 3,
        proposal_id: 12,
        destination: "San Jose, San Jose, Costa Rica",
        arrival_date: "2024-06-13",
        departure_date: "2024-06-19",
        hotel: hotelId,
        restaurant: restaurantIds,
        tour: toursIds,
      },
    ];

    await tripRequest(data);
  };

  console.log("Hotel id: ", hotelId);
  console.log("restaurantIds ids: ", restaurantIds);
  console.log("toursIds: ", toursIds);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-[40px]">
          <h2 className="text-[24px]">{item.city}</h2>

          <TripDestination
            isOnSelection={true}
            title="Selecciona Hotel"
            destination={item.hotels}
            handleSelectedIds={handleSetHotelId}
          />
          <TripDestination
            isOnSelection={false}
            title="Selecciona Restaurante"
            destination={item.restaurants}
            handleSelectedIds={handleSetRestaurantIds}
          />
          <TripDestination
            isOnSelection={false}
            title="Selecciona Tours"
            destination={item.tours}
            handleSelectedIds={handleSetToursIds}
          />
        </div>
      ))}

      <button
        onClick={handleTripRequest}
        className=" mt-[10px] bg-themePrimary text-themeOffwhite rounded-[4px] px-[10px] py-[4px]">
        Ordenar itinerario
      </button>
    </div>
  );
};

export default TripsList;
