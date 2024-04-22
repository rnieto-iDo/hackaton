import { Routes, Route, Navigate } from "react-router-dom"
import routes from "./routes"
import Home from "../Components/Home"
import { Agencies } from "../../features/agencies/Containers/Agencies"
import Profile from "../../features/profile/Containers/Profile"
import { Destinations } from "../../features/destinations/Containers/Destinations"
import Signup from "../../features/Signup/Containers/Signup"

import { Destination } from "../../features/destinations/Containers/Destination"
import Tags from "../../features/tags/Components/Tags"
import DestinationForm from "../../features/destinations/Components/DestinationForm"
import RoundTrip from "../../features/RounTrip/Containers/RoundTrip.tsx"
import Trips from "../../features/Trips/Containers/Trips.js"
import DestinationPriceForm from "../../features/destinations/Components/DestinationPriceForm.tsx"

export default function Router() {
	return (
		<Routes>
			<Route path={routes.Home.path} element={<Home />} />
			<Route path={routes.Agencies.path} element={<Agencies />} />
			<Route path={routes.Profile.path} element={<Profile />} />
			<Route path={routes.Login.path} element={<Signup />} />
			<Route path={routes.RoundTrip.path} element={<RoundTrip />} />

			<Route path={routes.Tags.path} element={<Tags />} />

			<Route
				path={routes.DestinationsByAgency.path}
				element={<Destinations />}
			/>
			<Route path={routes.DestinationById.path} element={<Destination />} />
			<Route path={routes.RoundTripById.path} element={<Trips />} />

			<Route
				path={routes.DestinationsByAgency.path}
				element={<Destinations />}
			/>

			<Route path={routes.DestinationForm.path} element={<DestinationForm />} />

			<Route path={routes.PriceForm.path} element={<DestinationPriceForm />} />

			<Route path="/404" element={<>404 page</>} />

			{/* This route matches any page that doesn't exists, so it must be at the end of the Routes */}
			<Route path="*" element={<Navigate to="/404" />} />
		</Routes>
	)
}
