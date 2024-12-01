import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import postsReducer from "./reducers/postsReducer";
import { thunk } from "redux-thunk";
import usersReducer from "./reducers/usersReducer";

const rootReducer = {
  auth: authReducer,
  posts: postsReducer,
  users: usersReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware();
    middlewares.prepend(thunk);
    return middlewares;
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
