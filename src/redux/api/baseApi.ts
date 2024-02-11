// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://donation-camp-orpin.vercel.app/api/v1`,
  }),
  tagTypes: ["Donation", "Donated"],
  endpoints: () => ({}),
});
