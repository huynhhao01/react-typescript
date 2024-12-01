import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import { UserState, User as UserModel } from "../../types/user.type";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const usersResponse = await fetch(BASE_URL + "/users");

  if (usersResponse.status === 200) {
    const userData = await usersResponse.json();
    console.log(userData);

    return {
      error: false,
      users: userData,
    };
    
  }
  return {
    error: true,
  };
});

const initialState: UserState = {
  ids: [],
  objList: {},
  stage: "idle", // loading, succeeded, failed
  error: false,
};

const users = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      const { users } = action.payload;
      console.log('usersReducer', users);
      const ids: Array<UserModel["id"]> = [];
      const objList = users.reduce(
        (acc: UserState["objList"], post: UserModel) => {
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
        ...objList,
      };
      state.ids = [...state.ids, ...ids];
      state.stage = "succeed";
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.error = true;
      state.stage = "failed";
    });
    builder.addCase(fetchUsers.pending, (state) => {
      state.stage = "loading";
    });
  },
});

const usersReducer = users.reducer;
export default usersReducer;
