import RoundTripWrapper from "../Components/RoundTripWrapper";
import RoundTripContainer from "../Components/RoundTripContainer";

const RoundTrip = () => {
  return (
    <section className="h-screen bg-[#09379C] px-[16px]">
      <RoundTripWrapper children={<RoundTripContainer />} />
    </section>
  );
};

export default RoundTrip;
