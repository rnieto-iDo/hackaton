import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDestinationById, fetchDestinations } from "../Services";
import {
  IDestination,
  IDestinationSlice,
  Status,
} from "../Utils/destinationsInterfaces";

const handleAsyncThunkError = (error: Error) => {
  throw error;
};

export const fetchSingleDestination = createAsyncThunk(
  "destinations/getSingle",
  async (id: string) => {
    try {
      const response = await fetchDestinationById(id);
      return response.data;
    } catch (error) {
      return handleAsyncThunkError(error as Error);
    }
  }
);

export const fetchAllDestinations = createAsyncThunk(
  "destinations/getAll",
  async () => {
    try {
      const response = await fetchDestinations();
    
      return response.data;
    } catch (error) {
      return handleAsyncThunkError(error as Error);
    }
  }
);
const initialState: IDestinationSlice = {
  destinations: [],
  selectedDestination: {
    id: 0,
    agency_id: 0,
    agency_name: "",
    name: "",
    description: "",
    location: "",
    address: "",
    phone_number: "",
    cover: "",
    logo: "",
    city: "",
    country: "",
    state: "",
    type: "",
    category: "",
    status: Status.Open,
    age_restriction: 0,
    gallery: [],
    tags: [],
  },
  status: "idle",
};

export const DestinationsSlice = createSlice({
  name: "destinations",
  initialState: initialState,
  reducers: {
    resetDestinationSelection: (state) => {
      return {
        ...state,
        selectedDestination: initialState.selectedDestination,
      };
    },

    setSelectedDestination: (
      state,
      { payload }: PayloadAction<IDestination>
    ) => {
      return {
        ...state,
        selectedDestination: payload,
        status: "succeeded",
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSingleDestination.pending, (state) => {
        return {
          ...state,
          status: "loading",
        };
      })
      .addCase(fetchSingleDestination.fulfilled, (state, { payload }) => {
        return {
          ...state,
          selectedDestination: payload,
          status: "succeeded",
        };
      })
      .addCase(fetchSingleDestination.rejected, (state) => {
        return {
          ...state,
          status: "failed",
        };
      })
      .addCase(fetchAllDestinations.fulfilled, (state,{payload} ) => {
        return {
          ...state,
          destinations: payload,
          status: "succeeded",
        };
      }
      )
  },
});

export const { resetDestinationSelection, setSelectedDestination } =
  DestinationsSlice.actions;
export const DestinationsReducer = DestinationsSlice.reducer;
