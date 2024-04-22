import { configureStore } from "@reduxjs/toolkit";

import { AgenciesReducer } from "../../features/agencies/Slices/agenciesSlice";
import { userReducer } from "../../features/Signup/Slices/UserSlice";
import { DestinationsReducer } from "../../features/destinations/Slices/destinationsSlice";
import { TravelsReducer } from "../../features/travels/Slices/travelsSlice";
import { profileReducer } from "../../features/profile/Slices/profileSlice";
import { RoundTripReducer } from "../../features/RounTrip/Slice/roundTripSlice";

export const store = configureStore({
  reducer: {
    // Add reducers here
    agencies: AgenciesReducer,
    user: userReducer,
    destinations: DestinationsReducer,
    travels: TravelsReducer,
    profile: profileReducer,
    roundTrip: RoundTripReducer,
  },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
