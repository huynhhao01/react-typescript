import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import { PostState, Post as PostModel } from "../../types/post.type";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const fetchPost = fetch(BASE_URL + "/posts");

  const postsResponse = await fetchPost;

  if (postsResponse.status === 200) {
    const postData = await postsResponse.json();

    return {
      error: false,
      posts: postData,
    };
  }
  return {
    error: true,
  };
});

const initialState: PostState = {
  ids: [],
  objList: {},
  stage: "idle", // loading, succeeded, failed
  error: false,
}

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      const { posts } = action.payload;
      const ids: Array<number> = [];
      const objList = posts.reduce(
        (acc: PostState["objList"], post: PostModel) => {
          if (post) {
            acc[post.id] = post;
            ids.push(post.id);
          }
          return acc;
        },
        {}
      );
      state.objList = {
        ...state.objList,
        ...objList
      };
      state.ids = [...state.ids, ...ids];
      state.stage = "succeed";
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
