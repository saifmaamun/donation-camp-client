import { TDonation } from "@/interfaces/IDonationsPost";
import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  searchedStateData: TDonation[];
};

const initialState: TInitialState = {
  searchedStateData: [],
};

const searchedSlice = createSlice({
  name: "searched",
  initialState,
  reducers: {
    setSearchedData: (state, action) => {
      state.searchedStateData = [];
      state.searchedStateData = action.payload;
    },
  },
});

export const { setSearchedData } = searchedSlice.actions;
export default searchedSlice.reducer;
