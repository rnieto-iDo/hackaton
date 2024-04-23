import RoundTripWrapper from "../Components/RoundTripWrapper";
import RoundTripContainer from "../Components/RoundTripContainer";

const RoundTrip = () => {
  return (
    <section className="px-[16px] h-full pb-[20px] mt-[20px] flex justify-center">
      <RoundTripWrapper children={<RoundTripContainer />} />
    </section>
  );
};

export default RoundTrip;
