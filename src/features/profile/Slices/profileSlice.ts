import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchProfiles } from "../Services";
import { ProfileSlice, ProfileSingle } from "../Utils/profileInterface";

const handleAsyncThunkError = (error: Error) => {
  throw error;
};

export const fetchProfileById = createAsyncThunk(
  "profiles/getById",
  async (id: number) => {
    try {
      const response = await fetchProfiles(id);
      console.log("resp",response.data);
      return response.data;
    } catch (error) {
      return handleAsyncThunkError(error as Error);
    }
  }
);

const initialState: ProfileSlice = {
  profiles: {} as ProfileSingle,
  status: "idle",
};

export const ProfileSlices = createSlice({
  name: "profiles",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProfileById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProfileById.fulfilled,
        (state, { payload }: PayloadAction<ProfileSingle>) => {
          state.status = "succeeded";
          state.profiles = payload;
        }
      )
      .addCase(fetchProfileById.rejected, (state) => {
        state.status = "failed";
      })
     
      
  },
});

export const { } = ProfileSlices.actions

export const profileReducer = ProfileSlices.reducer
