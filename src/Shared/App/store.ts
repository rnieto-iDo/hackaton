import { configureStore } from "@reduxjs/toolkit";

import { AgenciesReducer } from "../../features/agencies/Slices/agenciesSlice";

export const store = configureStore({
  reducer: {
    // Add reducers here
    agencies: AgenciesReducer,
  },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
