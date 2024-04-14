import { ProfileWrapper } from "../Utils/profileInterface";
import "./style.css";

const WrapperProfile = ({ title, photo }: ProfileWrapper) => {
  return (
    <div className="bg-[#38587F] w-full flex items-center justify-center wrapper-profile">
      <div className="flex flex-col gap-[20px]">
        <div className="h-[100px] w-[100px] rounded-[50%] overflow-hidden m-auto">
          <img className="w-full h-full" src={photo} />
        </div>
        <h1 className="text-[#ffff]">{title}</h1>

        <button className="bg-[#577899] text-[#ffff] text-[12px] w-[80px] m-auto p-1 cursor-pointer">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default WrapperProfile;
