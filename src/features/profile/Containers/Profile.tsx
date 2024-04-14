import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams<{ id: string }>();

  //   const matches = useMatches();
  //   console.log("matches", matches);

  return (
    <section>
      Profile
      <p>ID: {id}</p>
    </section>
  );
};

export default Profile;
