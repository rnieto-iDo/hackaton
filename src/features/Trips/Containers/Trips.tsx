import TripsList from "../Components/TripsList";
import { data } from "../Utils/utils";

const Trips = () => {
  const { trip_request_id, proposals } = data;
  return (
    <div className="py-[20px] ">
      <h1 className="text-[24px]">
        Trip <span>{trip_request_id}</span>
      </h1>

      <TripsList data={proposals} />
    </div>
  );
};

export default Trips;
