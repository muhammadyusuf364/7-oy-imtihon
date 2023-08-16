import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./page/About";
import Carts from "./page/Carts";
import Products from "./page/Products";
import SinglePage from "./page/SinglePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element:<About></About>
  },
  {
    path: "/product",
    element: <Products></Products>,
  },
  {
    path: "/cart",
    element: <Carts></Carts>,
  },
  {
    path: "/single",
    element: <SinglePage></SinglePage>
  },

]);


function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
