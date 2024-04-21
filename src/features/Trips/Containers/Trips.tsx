import { useAppSelector } from "../../../Shared/App/hook";
import TripsList from "../Components/TripsList";
import { data } from "../Utils/utils";

const Trips = () => {
  // const { trip_request_id, proposals } = data;
  const trip = useAppSelector((state) => state.roundTrip.trip);
  const { trip_request_id, proposals, proposal_id } = trip;

  console.log("trip", trip);
  return (
    <div className="py-[20px] ">
      <h1 className="text-[24px]">
        Trip <span>{trip_request_id}</span>
      </h1>

      <TripsList
        proposal_id={proposal_id}
        trip_request_id={trip_request_id}
        data={data.proposals}
      />
    </div>
  );
};

export default Trips;
