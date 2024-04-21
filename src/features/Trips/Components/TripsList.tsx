import { useState } from "react";
import { Proposal } from "../Utils/utils";
import TripDestination from "./TripDestination";
import { tripRequest } from "../Services";

interface TripsListProps {
  data: Proposal[];
}
const TripsList = ({ proposal_id, data, trip_request_id }: TripsListProps) => {
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

  //   console.log(proposal_id, "proposal_id");
  //   console.log(arrival_date, "arrival_date");
  //   console.log(departure_date, "departure_date");

  const handleTripRequest = async () => {
    const destina = JSON.stringify([
      {
        destination: "San Jose, San Jose, Costa Rica",
        arrival_date: "2024-06-13",
        departure_date: "2024-06-19",
        hotel: 1,
        restaurant: [2, 3, 4],
        tour: [5, 6, 7],
      },
      {
        destination: "Heredia, Heredia, Costa Rica",
        arrival_date: "2024-06-13",
        departure_date: "2024-06-19",
        hotel: 1,
        restaurant: [2, 3, 4],
        tour: [5, 6, 7],
      },
    ]);
    const data3 = {
      trip_request_id: 46,
      proposal_id: 28,
      origin: "Managua, Nicaragua",
      destinations: destina,
      adults: 2,
      children: 3,
      pets: 1,
    };

    await tripRequest(data3);
  };

  const [currentProposalIndex, setCurrentProposalIndex] = useState(0);

  const goToPreviousProposal = () => {
    setCurrentProposalIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const goToNextProposal = () => {
    setCurrentProposalIndex((prevIndex) =>
      Math.min(data.length - 1, prevIndex + 1)
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-[40px]">
        <h2 className="text-[24px]">{data[currentProposalIndex].city}</h2>

        <TripDestination
          isOnSelection={true}
          title="Selecciona Hotel"
          destination={data[currentProposalIndex].hotels}
          handleSelectedIds={handleSetHotelId}
        />

        {data[currentProposalIndex].restaurants.length > 0 && (
          <TripDestination
            isOnSelection={false}
            title="Selecciona Restaurante"
            destination={data[currentProposalIndex].restaurants}
            handleSelectedIds={handleSetRestaurantIds}
          />
        )}

        {data[currentProposalIndex].tours.length > 0 && (
          <TripDestination
            isOnSelection={false}
            title="Selecciona Tours"
            destination={data[currentProposalIndex].tours}
            handleSelectedIds={handleSetToursIds}
          />
        )}
      </div>

      <button
        className="mt-[10px] bg-themePrimary text-themeOffwhite rounded-[4px] px-[10px] py-[4px]"
        onClick={goToNextProposal}>
        Next proposal
      </button>
      <button
        className="mt-[10px] bg-themePrimary text-themeOffwhite rounded-[4px] px-[10px] py-[4px]"
        onClick={goToPreviousProposal}>
        Previus proposal
      </button>
      <button
        onClick={handleTripRequest}
        className="mt-[10px] bg-themePrimary text-themeOffwhite rounded-[4px] px-[10px] py-[4px]">
        Ordenar itinerario
      </button>
    </div>
  );
};

export default TripsList;
