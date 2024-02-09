import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
      }),
      //   providesTags: ["User"],
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: `/users/signup`,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `users/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useGetUsersQuery, useSignUpMutation, useLoginMutation } =
  userApi;
