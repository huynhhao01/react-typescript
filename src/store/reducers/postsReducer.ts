import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const fetchPost = fetch(BASE_URL + "/posts");
  const fetchUser = fetch(BASE_URL + "/users");

  const postsResponse = await fetchPost;
  const usersResponse = await fetchUser;

  if (postsResponse.status === 200 && usersResponse.status === 200) {
    // fetch users
    const postData = await postsResponse.json();
    const userData = await usersResponse.json();

    return {
      error: false,
      posts: postData,
      users: userData,
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
