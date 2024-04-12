import { Routes, Route, Navigate } from "react-router-dom"
import Test from "../../../test"
import routes from "./routes"

export default function Router() {
	return (
		<Routes>
			<Route
				path={routes.Home.path}
				element={
					// <Home />
					<>home</>
				}
			/>

			<Route path={routes.Test.path} element={<>test</>} />

			<Route path="/404" element={<>404 page</>} />

			{/* This route matches any page that doesn't exists, so it must be at the end of the Routes */}
			<Route path="*" element={<Navigate to="/404" />} />
		</Routes>
	)
}
