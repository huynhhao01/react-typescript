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
    list: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log(action);
    });
  },
});

const postsReducer = posts.reducer;
export default postsReducer;
