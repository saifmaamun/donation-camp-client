import { baseApi } from "@/redux/api/baseApi";

const donatedDataApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => ({
        url: `/donated`,
        method: "GET",
      }),
      providesTags: ["Donated"],
    }),
    addData: builder.mutation({
      query: (data) => ({
        url: `/donated`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Donated"],
    }),
  }),
});

export const { useAddDataMutation, useGetAllDataQuery } = donatedDataApi;
