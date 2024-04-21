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
};

export const RoundTripSlice = createSlice({
  name: "roundTrip",
  initialState: initialState,
  reducers: {
    handleSaveRoundTrip: (state, action) => {
      console.log("roundtrip", action);
      state.trip = action.payload;
    },
  },
  extraReducers(builder) {
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

export const { handleSaveRoundTrip } = RoundTripSlice.actions;
export const RoundTripReducer = RoundTripSlice.reducer;
