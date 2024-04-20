import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAgencies, fetchAgencyById, fetchDestinationAll } from "../Services";

import {
  IAgencies,
  IAgenciesSlice,
  IAgency,
} from "../Utils/agenciesInterfaces";

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

export const fetchSingleAgency = createAsyncThunk(
  "agencies/getSingle",
  async (id: string) => {
    try {
      const response = await fetchAgencyById(id);
      return response.data;
    } catch (error) {
      return handleAsyncThunkError(error as Error);
    }
  }
);

export const fetchAllDestinations = createAsyncThunk(
  "agencies/getDestinations",
  async () => {
    try {
      const response = await fetchDestinationAll();
      return response.data;
    } catch (error) {
      return handleAsyncThunkError(error as Error);
    }
  }
);



const initialState: IAgenciesSlice = {
  agencies: [],
  selectedAgency: {
    id: 0,
    user_id: 0,
    name: "",
    name_juridical: "",
    cedula: "",
    phone_number: "",
    address: "",
    email: "",
    bank_account: "",
    bio: "",
    cover: "",
    logo: "",
    destinations: [],
  },
  status: "idle",
};

export const AgenciesSlice = createSlice({
  name: "agencies",
  initialState: initialState,
  reducers: {
    resetAgencySelection: (state) => {
      return { ...state, selectedAgency: initialState.selectedAgency };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllAgencies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchAllAgencies.fulfilled,
        (state, { payload }: PayloadAction<Array<IAgencies>>) => {
          state.status = "succeeded";
          state.agencies = payload;
        }
      )
      .addCase(fetchAllAgencies.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(
        fetchSingleAgency.fulfilled,
        (state, { payload }: PayloadAction<IAgency>) => {
          state.selectedAgency = payload;
        }
      );
  },
});

export const { resetAgencySelection } = AgenciesSlice.actions;
export const AgenciesReducer = AgenciesSlice.reducer;
