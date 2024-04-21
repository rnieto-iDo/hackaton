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
  const [destinations, setDestinations] = useState([]);

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

  const addDestination = (newDestination) => {
    setDestinations((prevDestinations) => [
      ...prevDestinations,
      newDestination,
    ]);
  };

  const handleSelection = () => {
    const newDestination = {
      destination: data[currentProposalIndex].city,
      arrival_date: data[currentProposalIndex].arrival_date,
      departure_date: data[currentProposalIndex].departure_date,
      hotel: hotelId,
      restaurant: restaurantIds,
      tour: toursIds,
    };

    setHotelId([]);
    setRestaurantIds([]);
    setToursIds([]);

    addDestination(newDestination);
  };

  console.log(proposal_id, "proposal_id");
  console.log(trip_request_id, "trip_request_id");
  // console.log(arrival_date, "arrival_date");
  // console.log(departure_date, "departure_date");

  const handleTripRequest = async () => {
    const finalDestinations = JSON.stringify(destinations);
    const data3 = {
      trip_request_id: trip_request_id,
      proposal_id: proposal_id,
      origin: "Managua, Nicaragua",
      destinations: finalDestinations,
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

    handleSelection();
  };

  console.log("destinations array", destinations);

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
