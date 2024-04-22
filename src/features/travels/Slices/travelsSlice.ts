import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITravel, ITravelSlice } from "../Utils/travelInterfaces";
import { TRAVEL_LIST } from "../../../assets/mock";

const initialState: ITravelSlice = {
  travels: TRAVEL_LIST,
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
  extraReducers() {},
});

export const { resetTravelSelection, setSelectedTravel } = TravelsSlice.actions;
export const TravelsReducer = TravelsSlice.reducer;
