import { createSlice } from "@reduxjs/toolkit";

export type TInitialState = {
  email: string;
  role: string;
};

const initialState: TInitialState = {
  email: "",
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    resetState: (state) => {
      state.email = "";
      state.role = "";
    },
  },
});

export const { resetState, setEmail, setRole } = userSlice.actions;

export default userSlice.reducer;
