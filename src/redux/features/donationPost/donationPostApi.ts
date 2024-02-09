import { baseApi } from "@/redux/api/baseApi";

const donationPostApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: `/posts`,
        method: "GET",
      }),
    }),
    getPostById: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = donationPostApi;
