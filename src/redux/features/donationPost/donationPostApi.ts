import { baseApi } from "@/redux/api/baseApi";

const donationPostApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: `/posts`,
        method: "GET",
      }),
      providesTags: ["Donation"],
    }),
    getPostById: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: `/posts`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Donation"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Donation"],
    }),
    editPost: builder.mutation({
      query: ({ id, data }) => ({
        url: `/posts/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useEditPostMutation,
} = donationPostApi;
