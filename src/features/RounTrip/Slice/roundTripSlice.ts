import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createRoundTrip } from "../Services";

const handleAsyncThunkError = (error: Error) => {
  throw error;
};

export const roundTrip = createAsyncThunk(
  "roundTrip/createRoundTrip",
  async (data: any) => {
    console.log("aquiii");
    try {
      const response = await createRoundTrip(data);
      return response.data;
    } catch (error) {
      return handleAsyncThunkError(error as Error);
    }
  }
);

const initialState: any = {
  trip: {},
  status: "idle",
  origin: "",
  adults: 0,
  pets: 0,
  children: 0,
};

interface TripInfo {
  origin: string;
  adults: number;
  pets: number;
  children: number;
}

export const RoundTripSlice = createSlice({
  name: "roundTrip",
  initialState: initialState,
  reducers: {
    handleSaveRoundTrip: (state, action) => {
      console.log("roundtrip", action);
      state.trip = action.payload;
    },
    handleSaveInfo: (state, { payload }: PayloadAction<TripInfo>) => {
      state.origin = payload.origin;
      state.adults = payload.adults;
      state.pets = payload.pets;
      state.children = payload.children;
    },
  },
  extraReducers() {
    // builder
    //   .addCase(roundTrip.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(
    //     roundTrip.fulfilled,
    //     (state, { payload }: PayloadAction<any, any>) => {
    //       state.status = "succeeded";
    //       state.roundTrip = payload;
    //     }
    //   )
    //   .addCase(roundTrip.rejected, (state) => {
    //     state.status = "failed";
    //   });
  },
});

export const { handleSaveRoundTrip, handleSaveInfo } = RoundTripSlice.actions;
export const RoundTripReducer = RoundTripSlice.reducer;
