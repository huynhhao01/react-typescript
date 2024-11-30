import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const postResponse = fetch(BASE_URL + "/posts");
  const userResponse = fetch(BASE_URL + "/users");

  // const [postResponse, userResponse] = await Promise.all([
  //   fetch(BASE_URL + "/posts"),
  //   fetch(BASE_URL + "/users")
  // ]);

  const postData = await postResponse.json();
  const userData = await userResponse.json();

  if (postData.status === 200 && userData.status === 200) {
    // fetch users
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
