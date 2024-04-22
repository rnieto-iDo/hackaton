import { useAppSelector } from "../../../Shared/App/hook";
import TripsList from "../Components/TripsList";
// import { data } from "../Utils/utils";

const Trips = () => {
  // const { trip_request_id, proposals } = data;
  const trip = useAppSelector((state) => state.roundTrip.trip);
  const tripOrigin = useAppSelector((state) => state.roundTrip.origin);
  const tripAdults = useAppSelector((state) => state.roundTrip.adults);
  const tripPets = useAppSelector((state) => state.roundTrip.pets);
  const tripChildren = useAppSelector((state) => state.roundTrip.children);
  const { trip_request_id, proposal_id, proposals } = trip;

  return (
    <div className="py-[30px] ">
      <TripsList
        proposal_id={proposal_id}
        trip_request_id={trip_request_id}
        data={proposals}
        tripOrigin={tripOrigin}
        tripAdults={tripAdults}
        tripPets={tripPets}
        tripChildren={tripChildren}
      />
    </div>
  );
};

export default Trips;
