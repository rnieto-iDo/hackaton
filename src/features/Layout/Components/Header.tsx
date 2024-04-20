import Logo from "../../../assets/hackatonLogo.png";
import { Link } from "react-router-dom";

import { Avatar, Button, Dropdown } from "antd";

import { MenuOutlined } from "@ant-design/icons";

export const Header = () => {
  const inLogin = true;

  const logOut = () => {
    window.location.href = "/login";
  };
  //
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
      label: (
        <Button onClick={logOut} danger>
          Log Out
        </Button>
      ),
    },
  ];

  return (
    <header className="flex flex-row items-center justify-between bg-[#fff] px-4 md:px-20 py-5 shadow-xl w-screen ">
      <div>
        <Link to="/">
          <img className="h-10" src={Logo} alt="Tesla Logo" />
        </Link>
      </div>

      <div>
        {!inLogin ? (
          <div>
            <Link to="/login">
              <button className="bg-[#1e1e1e] text-[#fff] px-5 py-2 rounded-md mr-5">
                Iniciar Sesión
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-[#1e1e1e] text-[#fff] px-5 py-2 rounded-md">
                Registrarse
              </button>
            </Link>
          </div>
        ) : (
          <div className="border border-text rounded-full px-1 flex flex-row items-center gap-1 shadow-text/20 shadow-md">
            <Avatar
              size={40}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
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
