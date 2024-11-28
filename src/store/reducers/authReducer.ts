import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: {
    username: "hello",
    password: "",
  },
  reducers: {},
  extraReducers: () => {},
});

const authReducer = auth.reducer;
export default authReducer;
