import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Destination } from "../../features/destinations/Containers/Destination";
import { Destinations } from "../../features/destinations/Containers/Destinations";

type Tag = {
  id: number;
  name: string;
};

export default function Home() {
  const [tags, setTags] = useState<Array<Tag>>([]);

  useEffect(() => {
    const url = import.meta.env.VITE_API_BASE_URL;
    axios
      .get(`${url}/tags`)
      .then((response) => {
        setTags(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Destinations />
    </div>
  );
}
