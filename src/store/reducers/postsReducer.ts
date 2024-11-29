import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch(BASE_URL + "/posts");
  const userResponse = await fetch(BASE_URL + "/users");

  if (response.status === 200) {
    const posts = await response.json();
    // fetch users
    const users = await userResponse.json();
    return {
      error: false,
      posts,
      users,
    };
  }
  return {
    error: true,
  };
});

const posts = createSlice({
  name: "posts",
  initialState: {
    list: [],
    users: [],
    stage: "idle", // loading, succeeded, failed
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      const { posts, users } = action.payload;
      state.list = posts;
      state.users = users;
      state.stage = "succeeded";
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.error = true;
      state.stage = "failed";
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.stage = "loading";
    });
  },
});

const postsReducer = posts.reducer;
export default postsReducer;
