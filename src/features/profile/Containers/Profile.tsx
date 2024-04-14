import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAllProfile } from "../Slices/profileSlice";
import WrapperProfile from "../Components/WrapperProfile";
import CardInfo from "../Components/CardInfo";

const Profile = () => {
  const { id } = useParams<{ id: string }>();

  // const handleFetchProfile = async () => {
  //   const response = await fetchAllProfile(id);
  //   console.log("response", response);
  // };

  // useEffect(() => {
  //   handleFetchProfile();
  // }, [id]);

  return (
    <section>
      <WrapperProfile
        title="Anthony Morales"
        photo="https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg"
      />
      <CardInfo />
    </section>
  );
};

export default Profile;
