import { RoundTripWrapperProps } from "../Utils/roundTripInterfaces";

const RoundTripWrapper = ({ children }: RoundTripWrapperProps) => {
  return (
    <div className="bg-themeOffwhite w-full max-h-[800px] overflow-y-auto  rounded-[5px] py-[40px] px-[24px] shadow-lg">
      {children}
    </div>
  );
};

export default RoundTripWrapper;
