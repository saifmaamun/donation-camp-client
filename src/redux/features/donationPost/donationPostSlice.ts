import { createSlice } from "@reduxjs/toolkit";

export type donationHistory = {
  email: string;
  id: string;
  category: string;
  title: string;
  amount: number;
};

type TInitialState = {
  id: string;
  category: string;
  title: string;
  details: string;
  img_url: string;
  theme_url: string;
  donation_amount: number;
  donation?: donationHistory;
};

const initialState: TInitialState = {
  id: "",
  category: "",
  title: "",
  details: "",
  img_url: "",
  theme_url: "",
  donation_amount: 0,
  donation: {
    email: "",
    id: "",
    category: "",
    title: "",
    amount: 0,
  },
};

const donationPostSlice = createSlice({
  name: "donation",
  initialState,
  reducers: {
    setDonation: (state, action) => {
      state.donation = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    setImg: (state, action) => {
      state.img_url = action.payload;
    },
    setTheme: (state, action) => {
      state.theme_url = action.payload;
    },
    setAmount: (state, action) => {
      state.donation_amount = action.payload;
    },
  },
});

export const {
  setAmount,
  setCategory,
  setDetails,
  setDonation,
  setId,
  setImg,
  setTheme,
  setTitle,
} = donationPostSlice.actions;
export default donationPostSlice.reducer;
