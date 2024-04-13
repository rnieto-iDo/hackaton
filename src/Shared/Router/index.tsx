import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";
import Home from "../Components/Home";
import { Agencies } from "../../features/agencies/Containers/Agencies";
import Profile from "../../features/profile/Containers/Profile";

export default function Router() {
  return (
    <Routes>
      <Route path={routes.Home.path} element={<Home />} />
      <Route path={routes.Agencies.path} element={<Agencies />} />
      <Route path={routes.Profile.path} element={<Profile />} />

      <Route path="/404" element={<>404 page</>} />

      {/* This route matches any page that doesn't exists, so it must be at the end of the Routes */}
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
