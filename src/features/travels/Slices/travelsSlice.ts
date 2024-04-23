import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ITravel, ITravelLite, ITravelSlice } from "../Utils/travelInterfaces";
import { fetchTripById, fetchTrips } from "../Services";

const handleAsyncThunkError = (error: Error) => {
  throw error;
};

export const fetchAllTrips = createAsyncThunk(
  "travels/getAll",
  async ({ profileId }: { profileId: number }) => {
    try {
      const response = await fetchTrips(profileId);
      return response.data;
    } catch (error) {
      return handleAsyncThunkError(error as Error);
    }
  }
);

export const fetchSingleTrip = createAsyncThunk(
  "travels/getSingle",
  async ({ profileId, tripId }: { profileId: number; tripId: number }) => {
    try {
      const response = await fetchTripById(profileId, tripId);
      return response.data;
    } catch (error) {
      return handleAsyncThunkError(error as Error);
    }
  }
);

const initialState: ITravelSlice = {
  travels: [],
  selectedTravel: {} as ITravel,
  status: "idle",
};

export const TravelsSlice = createSlice({
  name: "travels",
  initialState: initialState,
  reducers: {
    resetTravelSelection: (state) => {
      return {
        ...state,
        selectedTravel: initialState.selectedTravel,
      };
    },

    setSelectedTravel: (state, { payload }: PayloadAction<ITravel>) => {
      return {
        ...state,
        selectedTravel: payload,
        status: "succeeded",
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        fetchAllTrips.fulfilled,
        (state, { payload }: PayloadAction<Array<ITravelLite>>) => {
          state.status = "succeeded";
          state.travels = payload;
        }
      )
      .addCase(
        fetchSingleTrip.fulfilled,
        (state, { payload }: PayloadAction<ITravel>) => {
          state.status = "succeeded";
          state.selectedTravel = payload;
        }
      );
  },
});

export const { resetTravelSelection, setSelectedTravel } = TravelsSlice.actions;
export const TravelsReducer = TravelsSlice.reducer;
