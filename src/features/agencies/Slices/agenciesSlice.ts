import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAgencies } from "../Services";
import { IAgency, IAgenciesSlice } from "../Utils/agenciesInterfaces";

const handleAsyncThunkError = (error: Error) => {
  throw error;
};

export const fetchAllAgencies = createAsyncThunk(
  "agencies/getAll",
  async () => {
    try {
      const response = await fetchAgencies();
      return response.data;
    } catch (error) {
      return handleAsyncThunkError(error as Error);
    }
  }
);

const initialState: IAgenciesSlice = {
  agencies: [],
  status: "idle",
};

export const AgenciesSlice = createSlice({
  name: "agencies",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllAgencies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchAllAgencies.fulfilled,
        (state, { payload }: PayloadAction<Array<IAgency>>) => {
          state.status = "succeeded";
          state.agencies = payload;
        }
      )
      .addCase(fetchAllAgencies.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = AgenciesSlice.actions;
export const AgenciesReducer = AgenciesSlice.reducer;
