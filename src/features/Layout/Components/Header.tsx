import Logo from "../../../assets/hackatonLogo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Avatar, Button, Dropdown } from "antd";

import { MenuOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../../Shared/App/hook";

export const Header = () => {
  const userToken = useAppSelector((state) => state.user.user.token);
  const userType = useAppSelector((state) => state.user.user.role);
  const profile = useAppSelector((state) => state.profile.profiles);

  const navigate = useNavigate();

  const logOut = () => {
    //remove session storage
    sessionStorage.removeItem("accessToken");
    window.location.href = "/login";
  };

  const goToTrip = () => {
    navigate("/roundTrip");
  };
  const items = [
    {
      key: "1",
      label: <Link to="/profile">My Profile</Link>,
    },
    {
      key: "2",
      label: <Link to="/my-travels">My Travels</Link>,
    },
    {
      key: "3",
      label: <Link to="/agencies">Agencies</Link>,
    },

    {
      key: "4",
      label: <Button onClick={goToTrip}>New Trip</Button>,
    },
    {
      key: "5",
      label: <Button onClick={logOut}>Log Out</Button>,
    },
  ];

  return (
    <header className="flex flex-row items-center justify-between bg-[#fff px-4 md:px-20 py-5 shadow-xl w-screen  top-0 left-0 ">
      <div>
        <Link to="/">
          <img className="h-10" src={Logo} alt="Tesla Logo" />
        </Link>
      </div>

      <div className="flex flex-row items-center gap-2">
        {userType === "agency" ? (
          <Link to="/destinationForm">
            <Button type="primary">Add Destination</Button>
          </Link>
        ) : null}

        {!userToken ? (
          <div>
            <Link to="/login">
              <Button type="primary">Iniciar Sesión</Button>
            </Link>
          </div>
        ) : (
          <div className="border border-text rounded-full px-1 flex flex-row items-center gap-2 shadow-text/20 shadow-md">
            <Avatar
              size={30}
              src={`${import.meta.env.VITE_ASSETS_BASE_URL}${profile.photo}`}
            />
            <Dropdown menu={{ items }} placement="bottomRight">
              <Button type="primary" shape="circle" icon={<MenuOutlined />} />
            </Dropdown>
          </div>
        )}
      </div>
    </header>
  );
};
