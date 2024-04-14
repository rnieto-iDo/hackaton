import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAllProfile } from "../Slices/profileSlice";

const Profile = () => {
  const { id } = useParams<{ id: string }>();
  const token = sessionStorage.getItem("accessToken");
  const handleFetchProfile = async () => {
    const data = {
      id: id ?? "",
      userData: {
        jwtToken: token ?? "",
      },
    };
    const response = await fetchAllProfile(data);
    console.log("response", response);
  };

  useEffect(() => {
    handleFetchProfile();
  }, [id]);

  return (
    <section>
      Profile
      <p>ID: {id}</p>
    </section>
  );
};

export default Profile;
