import { useState } from "react";
import "./App.css";
import ListProducts from "./components/ListProducts";
import Login from "./pages/Login";
import { ListProductContext } from "./hooks/context";
import ListPosts from "./pages/ListPosts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ListPosts />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
