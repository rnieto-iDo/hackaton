import { useState } from "react";

import { Avatar, Button } from "antd";
import { EditOutlined, TagOutlined, CompassOutlined } from "@ant-design/icons";
const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Zella Wunsch",
    nationality: "Malawi",
    date_of_birth: "1973-12-02",
    photo: "https://via.placeholder.com/640x480.png/009900?text=nemo",
    tags: [
      {
        id: 1,
        name: "velit",
      },
      {
        id: 4,
        name: "consequatur",
      },
      {
        id: 5,
        name: "a",
      },
      {
        id: 6,
        name: "neque",
      },
      {
        id: 8,
        name: "atque",
      },
      {
        id: 9,
        name: "iste",
      },
      {
        id: 10,
        name: "rerum",
      },
      {
        id: 11,
        name: "numquam",
      },
      {
        id: 12,
        name: "magni",
      },
      {
        id: 15,
        name: "et",
      },
      {
        id: 17,
        name: "ea",
      },
      {
        id: 20,
        name: "dignissimos",
      },
      {
        id: 21,
        name: "beatae",
      },
      {
        id: 24,
        name: "dicta",
      },
      {
        id: 28,
        name: "reiciendis",
      },
      {
        id: 29,
        name: "quis",
      },
      {
        id: 30,
        name: "quia",
      },
      {
        id: 31,
        name: "nesciunt",
      },
      {
        id: 33,
        name: "voluptatem",
      },
      {
        id: 36,
        name: "dicta",
      },
      {
        id: 37,
        name: "odio",
      },
      {
        id: 38,
        name: "tempora",
      },
      {
        id: 42,
        name: "exercitationem",
      },
      {
        id: 43,
        name: "ratione",
      },
      {
        id: 45,
        name: "labore",
      },
      {
        id: 48,
        name: "dolores",
      },
      {
        id: 49,
        name: "voluptates",
      },
      {
        id: 50,
        name: "voluptatem",
      },
    ],
  });

  if (false) {
    setProfile({
      name: "Zella Wunsch",
      nationality: "Malawi",
      date_of_birth: "1973-12-02",
      photo: "https://via.placeholder.com/640x480.png/009900?text=nemo",
      tags: [
        {
          id: 1,
          name: "velit",
        },
        {
          id: 4,
          name: "consequatur",
        },
        {
          id: 5,
          name: "a",
        },
        {
          id: 6,
          name: "neque",
        },
        {
          id: 8,
          name: "atque",
        },
        {
          id: 9,
          name: "iste",
        },
        {
          id: 10,
          name: "rerum",
        },
        {
          id: 11,
          name: "numquam",
        },
        {
          id: 12,
          name: "magni",
        },
        {
          id: 15,
          name: "et",
        },
        {
          id: 17,
          name: "ea",
        },
        {
          id: 20,
          name: "dignissimos",
        },
        {
          id: 21,
          name: "beatae",
        },
        {
          id: 24,
          name: "dicta",
        },
        {
          id: 28,
          name: "reiciendis",
        },
        {
          id: 29,
          name: "quis",
        },
        {
          id: 30,
          name: "quia",
        },
        {
          id: 31,
          name: "nesciunt",
        },
        {
          id: 33,
          name: "voluptatem",
        },
        {
          id: 36,
          name: "dicta",
        },
        {
          id: 37,
          name: "odio",
        },
        {
          id: 38,
          name: "tempora",
        },
        {
          id: 42,
          name: "exercitationem",
        },
        {
          id: 43,
          name: "ratione",
        },
        {
          id: 45,
          name: "labore",
        },
        {
          id: 48,
          name: "dolores",
        },
        {
          id: 49,
          name: "voluptates",
        },
        {
          id: 50,
          name: "voluptatem",
        },
      ],
    });
  }
  return (
    <section>
      <div className="bg-gradient-to-r from-pink-500 to-violet-600 rounded-3xl m-4 p-4 ">
        <div className=" flex flex-col justify-center w-full items-center">
          <Avatar size={150} src={profile.photo} />

          <div className="text-center mt-8">
            <h1 className="text-white text Center font-bold text-2xl">
              {profile.name}
            </h1>
            <p className="text-white text Center font-semibold text-xl">
              {profile.nationality}
            </p>
            <p className="text-white text Center font-regular text-lg">
              {profile.date_of_birth}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4">
        <Button type="primary" shape="round" icon={<CompassOutlined />} block>
          Your Trips
        </Button>
        <Button type="primary" shape="round" icon={<EditOutlined />} block>
          Edit Profile
        </Button>
        <Button type="primary" shape="round" icon={<TagOutlined />} block>
          Edit Your Preferences
        </Button>
      </div>
    </section>
  );
};

export default Profile;
