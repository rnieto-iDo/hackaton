import { RoundTripWrapperProps } from "../Utils/roundTripInterfaces";

const RoundTripWrapper = ({ children }: RoundTripWrapperProps) => {
  return (
    <div className="bg-[#ffff] rounded-[5px] py-[40px] px-[24px] shadow-sm">
      {children}
    </div>
  );
};

export default RoundTripWrapper;
