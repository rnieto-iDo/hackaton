import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";
import Home from "../Components/Home";
import { Agencies } from "../../features/agencies/Containers/Agencies";
import Profile from "../../features/profile/Containers/Profile";
import RoundTrip from "../../features/RounTrip/Containers/RoundTrip.jsx";
import { Destinations } from "../../features/destinations/Containers/Destinations";
import Signup from "../../features/Signup/Containers/Signup";

export default function Router() {
  return (
    <Routes>
      <Route path={routes.Home.path} element={<Home />} />
      <Route path={routes.Agencies.path} element={<Agencies />} />
      <Route path={routes.Profile.path} element={<Profile />} />
      <Route path={routes.RoundTrip.path} element={<RoundTrip />} />
      <Route path={routes.Login.path} element={<Signup />} />
      <Route
        path={routes.DestinationsByAgency.path}
        element={<Destinations />}
      />

      <Route path="/404" element={<>404 page</>} />

      {/* This route matches any page that doesn't exists, so it must be at the end of the Routes */}
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
