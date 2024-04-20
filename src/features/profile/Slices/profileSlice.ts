import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchProfiles } from "../Services";
import { ProfileSlice, Profiles } from "../Utils/profileInterface";

const handleAsyncThunkError = (error: Error) => {
  throw error;
};

export const fetchAllProfile = createAsyncThunk(
  "profiles/getAll",
  async (id: string) => {
    try {
      const response = await fetchProfiles(id);
      return response.data;
    } catch (error) {
      return handleAsyncThunkError(error as Error);
    }
  }
);

const initialState: ProfileSlice = {
  profiles: [],
  status: "idle",
};

export const ProfileSlices = createSlice({
  name: "profiles",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchAllProfile.fulfilled,
        (state, { payload }: PayloadAction<Array<Profiles>>) => {
          state.status = "succeeded";
          state.profiles = payload;
        }
      )
      .addCase(fetchAllProfile.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = ProfileSlices.actions;
export const ProfileReducer = ProfileSlices.reducer;
