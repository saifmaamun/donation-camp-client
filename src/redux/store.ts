import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import donationReducer from "./features/donationPost/donationPostSlice";
import userReducer from "./features/user/userSlice";
import searchedReducer from "./features/searched/searchedSlice";
// import donatedReducer from "./features/donated/donatedSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    donation: donationReducer,
    // donated: donatedReducer,
    user: userReducer,
    searched: searchedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
