import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch(BASE_URL + "/posts");
  if (response.status === 200) {
    const posts = await response.json();
    return {
      error: false,
      posts,
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
    stage: "idle", // loading, succeeded, failed
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      const posts = action.payload.posts;
      state.list = posts;
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
