import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../Pages/Errorpage";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home";
import Product from "../Components/Product";
import Cart from "../Components/Cart";
import Login from "../Components/Login";
import Blog from "../Components/Blog";
import Contact from "../Components/Contact";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children: [
          {
            path: "/",
            loader:()=>fetch('/brands.json'),
            element: <Home></Home>,
          },
          {
            path:"/product",
            element:<Product></Product>,
          },
          {
            path:"/cart",
            element:<Cart></Cart>,
          },
          {
            path:"/login",
            element:<Login></Login>,
          },
          {
            path:"/blog",
            element:<Blog></Blog>,
          },
          {
            path:"/contact",
            element:<Contact></Contact>,
          },
        ],
    },
])
export default router;