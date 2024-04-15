import { Location } from "../../../assets/RoundTrip";

const RoundTripHeader = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="flex items-center gap-x-[8px] text-[0.75rem] font-semibold text-[#001A66]">
        <Location />
        <p>Destino</p>
      </div>
      <button className="border-solid border-[1px] rounded-[4px] cursor-pointer text-[12px] px-[10px] py-[4px] border-[#999999] flex items-center">
        <span className="mr-[4px]">x</span>Remover
      </button>
    </div>
  );
};

export default RoundTripHeader;
