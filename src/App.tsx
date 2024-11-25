import { useState } from "react";
import "./App.css";
import ListProducts from "./components/ListProducts";
import Login from "./pages/Login";
import { ListProductContext } from "./hooks/context";
import ListPosts from "./pages/ListPosts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/",
        element: <ListPosts />,
      },
      {
        path: "/contact",
        element: (
          <div>
            <h2>Contact</h2>
          </div>
        ),
      },
      {
        path: "/about-us",
        element: (
          <div>
            <h2>About us</h2>
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
